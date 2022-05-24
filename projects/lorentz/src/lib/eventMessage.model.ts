export class EventMessage {
  constructor (
    public to: string,
    public message: string,
    public from?: string
  ) {}
}
