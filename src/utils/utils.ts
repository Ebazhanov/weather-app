import dayjs from "dayjs";

export const getUrl = (
  endpoint: string | undefined,
  latitude: number,
  longitude: number,
  apiKey: string | undefined
) => {
  return `${endpoint}forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&cnt=9`;
};

export const getCurrentPosition: any = () => {
  if (!window.navigator || !window.navigator.geolocation) {
    alert("Error: geolocation API is not valid");
    throw new Error("Error: geolocation API is not valid");
  }
  return new Promise((resolve, reject) =>
    window.navigator.geolocation.getCurrentPosition(resolve, reject)
  ).catch(() => {
    alert("Please give your browser access to Geolocation to see the Weather");
  });
};

const getVisibility = (meterCount: number) => {
  return (meterCount / 1000).toFixed();
};

const getWeatherData = (rawData: any) => {
  const { visibility, main, weather, wind, dt_txt } = rawData;
  const { humidity, temp } = main;

  return {
    date: dayjs(dt_txt).toDate(),
    visibility: `${getVisibility(visibility)}/km`,
    humidity: `${humidity}%`,
    wind: `${Math.ceil(wind.speed)} m/sec`,
    temp: `${Math.ceil(temp)}°C`,
    icon: weather.at(0).icon,
    description: weather.at(0).description,
    shortDescription: weather.at(0).main,
  };
};

export const transformWeather = (rawData: any) => {
  const { city, list } = rawData;
  const today = list.at(0);
  const tomorrow = list.at(-1);

  return {
    city: city.name,
    sunrise: dayjs.unix(city.sunrise).format("HH:mm"),
    sunset: dayjs.unix(city.sunset).format("HH:mm"),
    today: getWeatherData(today),
    tomorrow: getWeatherData(tomorrow),
  };
};
