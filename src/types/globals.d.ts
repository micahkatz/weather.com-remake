interface WeatherData {
  queryCost: number;
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  days: CurrentConditions[];
  stations: { [key: string]: Station };
  currentConditions: CurrentConditions;
}

interface CurrentConditions {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string[] | null;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: Conditions;
  icon: Icon;
  stations: string[] | null;
  source: Source;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  tempmax?: number;
  tempmin?: number;
  feelslikemax?: number;
  feelslikemin?: number;
  precipcover?: number;
  severerisk?: number;
  description?: string;
}

enum Conditions {
  Clear = "Clear",
  PartiallyCloudy = "Partially cloudy",
}

enum Icon {
  Snow = "snow",
  Rain = "rain",
  Fog = "fog",
  Wind = "wind",
  Cloudy = "cloudy",
  PartlyCloudyDay = "partly-cloudy-day",
  PartlyCloudyNight = "partly-cloudy-night",
  ClearDay = "clear-day",
  ClearNight = "clear-night",
}

enum Source {
  Comb = "comb",
  Fcst = "fcst",
  Obs = "obs",
}

interface Station {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
}
