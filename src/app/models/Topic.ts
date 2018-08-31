export class Topic {
  constructor(
    private id: number,
    private name: string,
    private created: Date,
    private updated: Date,
    private secured: boolean
  ) {}
}
