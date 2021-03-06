const WEATHER_API_KEY = "9bc64e60c42456231fa0ac2eca228e78";

export async function getWeatherService(
  query: string
): Promise<Record<string, unknown>> {
  let weatherJson;
  try {
    const response = await fetch(query);
    weatherJson = await response.json();
  } catch (error) {
    weatherJson = { cod: 503, message: "Service is unavailable" };
  }
  return weatherJson;
}

export async function getWeather(
  cityName: string
): Promise<Record<string, unknown>> {
  return getWeatherService(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${WEATHER_API_KEY}`
  );
}

export async function getWeatherByCoordinats(
  lat: number,
  lon: number
): Promise<Record<string, unknown>> {
  return getWeatherService(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
  );
}
