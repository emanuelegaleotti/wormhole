export class Vehicle {
    constructor(
        public id: string,
        public name: string,
        public model: string,
        public manufacturer: string,
        public length: number,
        public passengers: number,
        public capacity: number,
        public vehicle_class: string,
    ) { }
}