const weatherAPI = `${process.env.VUE_APP_WEATHER_URL}/group?APPID=${process.env.VUE_APP_WEATHER_KEY}&units=metric&`;

export default {
  citiesWeather({ commit, dispatch }, cities) {
    commit("SET_LOADING", true);
    if (localStorage.getItem("weather")) {
      const cacheMilliseconds = 600000;
      const cachedUpdatedAt = new Date(localStorage.getItem("updated_at"));
      const currentDate = new Date();
      const expireCache = currentDate.getTime() - cacheMilliseconds;

      if (expireCache > cachedUpdatedAt.getTime()) {
        dispatch("fetchCitiesWeather", cities);
      } else {
        const cachedWeather = JSON.parse(localStorage.getItem("weather"));
        dispatch("setWeather", cachedWeather);
        dispatch("setUpdatedTime", cachedUpdatedAt);
      }
    } else {
      dispatch("fetchCitiesWeather", cities);
    }
  },
  async fetchCitiesWeather({ commit, dispatch }, citiesIds) {
    try {
      const response = await fetch(`${weatherAPI}id=${citiesIds}`);
      if (!response.ok) return commit("SET_ERROR", true);
      const result = await response.json();
      dispatch("setUpdatedTime", new Date());
      dispatch("setWeather", result.list);
    } catch (error) {
      return commit("SET_ERROR", true);
    }
  },
  setWeather({ commit, dispatch }, weatherList) {
    commit("SET_WEATHER", weatherList);
    dispatch("cacheWeather", weatherList);
    commit("SET_LOADING", false);
  },
  setUpdatedTime({ commit }, date) {
    const time = date.toLocaleTimeString("pt-BR");
    localStorage.setItem("updated_at", date);
    commit("SET_UPDATED_TIME", time);
  },
  cacheWeather(ctx, weatherList) {
    localStorage.setItem("weather", JSON.stringify(weatherList));
  }
};
