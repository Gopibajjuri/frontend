import {User} from "./user";

export class Skill {
  id: number | undefined
  user: User
  skill: string

  constructor(user: User, skill: string) {
    this.user = user;
    this.skill = skill;
  }
}
