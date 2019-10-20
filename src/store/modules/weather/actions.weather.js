const weatherAPI = `${process.env.VUE_APP_WEATHER_URL}?APPID=${process.env.VUE_APP_WEATHER_KEY}&`;

export default {
  async fetchCitiesWeather(ctx, cities) {
    const citiesIds = cities.map(city => city.id).join(",");
    let response = await fetch(`${weatherAPI}id=${citiesIds}`);
    let result = await response.json();
    console.log(result);
  }
};
