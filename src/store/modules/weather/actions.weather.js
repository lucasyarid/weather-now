const weatherAPI = `${process.env.VUE_APP_WEATHER_URL}/group?APPID=${process.env.VUE_APP_WEATHER_KEY}&units=metric&`;

export default {
  citiesWeather({ dispatch }, cities) {
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
      }
    } else {
      dispatch("fetchCitiesWeather", cities);
    }
  },
  async fetchCitiesWeather({ dispatch }, citiesIds) {
    const response = await fetch(`${weatherAPI}id=${citiesIds}`);
    const result = await response.json();

    dispatch("setWeather", result.list);
  },
  setWeather({ commit, dispatch }, weatherList) {
    commit("SET_WEATHER", weatherList);
    dispatch("cacheWeather", weatherList);
    dispatch("setUpdateTime");
  },
  setUpdateTime({ commit }) {
    const date = new Date();
    const time = date.toLocaleTimeString("pt-BR");

    localStorage.setItem("updated_at", date);
    commit("SET_UPDATED_TIME", time);
  },
  cacheWeather(ctx, weatherList) {
    localStorage.setItem("weather", JSON.stringify(weatherList));
  }
};
