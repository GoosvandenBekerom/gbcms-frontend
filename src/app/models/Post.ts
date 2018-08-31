import {Topic} from './Topic';

export class Post {
  constructor(
    private id: number,
    private created: Date,
    private updated: Date,
    private title: string,
    private summary: string,
    private content: string,
    private archived: boolean,
    private topic: Topic
  ) {}
}
