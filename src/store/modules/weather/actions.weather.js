const weatherAPI = `${process.env.VUE_APP_WEATHER_URL}/group?APPID=${process.env.VUE_APP_WEATHER_KEY}&units=metric&`;

export default {
  async fetchCitiesWeather({ commit }, cities) {
    const citiesIds = cities.map(city => city.id).join(",");
    let response = await fetch(`${weatherAPI}id=${citiesIds}`);
    let result = await response.json();
    commit("SET_WEATHER", result.list);
  }
};
