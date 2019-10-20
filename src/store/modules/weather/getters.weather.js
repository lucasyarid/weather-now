export default {
  weatherCitiesInfo(state) {
    return state.weatherList.map(city => {
      return {
        id: city.id,
        name: city.name,
        humidity: city.main.humidity,
        pressure: city.main.pressure,
        temp: Math.round(city.main.temp),
        country: city.sys.country
      };
    });
  },
  updatedTime(state) {
    return state.updatedTime;
  }
};
