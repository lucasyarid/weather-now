export default {
  SET_WEATHER(state, weatherList) {
    state.weatherList = weatherList;
  },
  SET_UPDATED_TIME(state, time) {
    state.updatedTime = time;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  }
};
