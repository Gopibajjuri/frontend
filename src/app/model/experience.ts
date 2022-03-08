import {User} from "./user";

export class Experience {
  id: number | undefined
  user: User
  title: string
  companyName: string
  location: string
  start: string
  stop: string
  headline: string

  constructor(user: User, title: string, companyName: string, location: string, start: string, stop: string, headline: string) {
    this.user = user;
    this.title = title;
    this.companyName = companyName;
    this.location = location;
    this.start = start;
    this.stop = stop;
    this.headline = headline;

  }

}
