export class Weather {
    constructor(
        public name: string,
        public weather: WeatherDetail[],
        public temp: number,
        public temp_max: number,
        public temp_min: number,
        public humidity: number,
        public pressure: number
    ) { }
}

export class WeatherDetail {
    constructor(
        public main: string,
        public description: string
    ) { }
}
