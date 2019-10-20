import mutations from "./mutations.weather";
import getters from "./getters.weather";
import actions from "./actions.weather";

class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return this.store[key] || null;
  }
  setItem(key, value) {
    this.store[key] = value.toString();
  }
  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

const commit = jest.fn(),
  dispatch = jest.fn(),
  mockedCities = [
    {
      id: 3421319,
      name: "Nuuk"
    },
    {
      id: 3445709,
      name: "Urubici"
    },
    {
      id: 184736,
      name: "Nairobi"
    }
  ],
  citiesIds = mockedCities.map(city => city.id).join(","),
  weatherAPI = `${process.env.VUE_APP_WEATHER_URL}/group?APPID=${process.env.VUE_APP_WEATHER_KEY}&units=metric&`;

let state;

beforeEach(() => {
  state = {
    weatherList: [],
    updatedTime: null,
    error: false,
    loading: false
  };
});

describe("Mutations", () => {
  test("SET_WEATHER", () => {
    const mockedWeatherCity = [{ id: 0, name: "city" }];
    mutations.SET_WEATHER(state, mockedWeatherCity);
    expect(state.weatherList).toBe(mockedWeatherCity);
  });

  test("SET_UPDATED_TIME", () => {
    const mockedDate = new Date();
    mutations.SET_UPDATED_TIME(state, mockedDate);
    expect(state.updatedTime).toBe(mockedDate);
  });

  test("SET_LOADING", () => {
    const mockedLoading = true;
    mutations.SET_LOADING(state, mockedLoading);
    expect(state.loading).toBe(mockedLoading);
  });

  test("SET_ERROR", () => {
    const mockedError = true;
    mutations.SET_ERROR(state, mockedError);
    expect(state.error).toBe(mockedError);
  });
});

describe("Getters", () => {
  test("weatherCitiesInfo", () => {
    const state = {
      weatherList: [
        {
          id: 0,
          name: "city",
          main: { humidity: 45, pressure: 1000, temp: 20 },
          sys: { country: "country" }
        }
      ]
    };
    const expectedReturn = [
      {
        id: 0,
        name: "city",
        humidity: 45,
        pressure: 1000,
        temp: 20,
        country: "country"
      }
    ];
    expect(getters.weatherCitiesInfo(state)).toMatchObject(expectedReturn);
  });

  test("updatedTime", () => {
    const mockedDate = new Date();
    const state = { updatedTime: mockedDate };
    expect(getters.updatedTime(state)).toBe(mockedDate);
  });

  test("isLoading", () => {
    expect(getters.isLoading(state)).toBeFalsy();
  });

  test("hasError", () => {
    expect(getters.hasError(state)).toBeFalsy();
  });
});

describe("Actions", () => {
  test("citiesWeather not cached", () => {
    actions.citiesWeather({ commit, dispatch }, citiesIds);

    expect(commit).toHaveBeenCalledWith("SET_LOADING", true);
    expect(dispatch).toHaveBeenCalledWith("fetchCitiesWeather", citiesIds);
  });

  test("citiesWeather cached", () => {
    const mockedWeatherList = [{ city: "" }];
    global.localStorage.setItem("weather", JSON.stringify(mockedWeatherList));
    global.localStorage.setItem("updated_at", new Date());

    actions.citiesWeather({ commit, dispatch }, citiesIds);
    expect(dispatch).toHaveBeenCalledWith("setWeather", mockedWeatherList);
    expect(dispatch).toHaveBeenCalledWith(
      "setUpdatedTime",
      new Date(global.localStorage.getItem("updated_at"))
    );
  });

  test("citiesWeather expired cached", () => {
    const mockedWeatherList = [{ city: "" }];
    global.localStorage.setItem("weather", JSON.stringify(mockedWeatherList));
    global.localStorage.setItem("updated_at", new Date(1970));

    actions.citiesWeather({ commit, dispatch }, citiesIds);
    expect(dispatch).toHaveBeenCalledWith("fetchCitiesWeather", citiesIds);
  });

  test("fetchCitiesWeather success", async done => {
    const mockSuccessResponse = { list: [] };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      ok: true,
      json: () => mockJsonPromise
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    actions.fetchCitiesWeather({ commit, dispatch }, citiesIds);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`${weatherAPI}id=${citiesIds}`);

    process.nextTick(() => {
      expect(dispatch).toHaveBeenCalledWith(
        "setWeather",
        mockSuccessResponse.list
      );

      global.fetch.mockClear();
      delete global.fetch;
      done();
    });
  });

  test("fetchCitiesWeather api problem", async done => {
    const mockSuccessResponse = { list: [] };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      ok: false,
      json: () => mockJsonPromise
    });
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);

    actions.fetchCitiesWeather({ commit, dispatch }, citiesIds);

    process.nextTick(() => {
      expect(commit).toHaveBeenCalledWith("SET_ERROR", true);

      global.fetch.mockClear();
      delete global.fetch;
      done();
    });
  });

  test("fetchCitiesWeather error", async done => {
    const mockPromiseError = Promise.error;
    global.fetch = jest.fn().mockImplementation(() => mockPromiseError);

    actions.fetchCitiesWeather({ commit, dispatch }, citiesIds);

    process.nextTick(() => {
      expect(dispatch).toHaveBeenCalledWith("fetchCitiesWeather", citiesIds);

      global.fetch.mockClear();
      delete global.fetch;
      done();
    });
  });

  test("setWeather", () => {
    actions.setWeather({ commit, dispatch }, []);

    expect(commit).toHaveBeenCalledWith("SET_WEATHER", []);
    expect(dispatch).toHaveBeenCalledWith("cacheWeather", []);
    expect(commit).toHaveBeenCalledWith("SET_LOADING", false);
  });

  test("setUpdatedTime", () => {
    const mockedDate = new Date();
    const time = mockedDate.toLocaleTimeString("pt-BR");
    actions.setUpdatedTime({ commit, dispatch }, mockedDate);

    expect(commit).toHaveBeenCalledWith("SET_UPDATED_TIME", time);
  });

  test("cacheWeather", () => {
    actions.cacheWeather({ commit, dispatch }, []);

    expect(global.localStorage).toMatchObject({
      updated_at: global.localStorage.updated_at,
      weather: "[]"
    });
  });
});
