import {User} from "./user";

export class Education {
  id: number | undefined
  user:User;

  school: string;
  degree: string;
  fieldOfStudy:string;
  start: string;
  stop: string;
  grade: number;
  activities: string;
  description: string;


  constructor(user: User, school: string, degree: string, fieldOfStudy: string, start: string, stop: string, grade: number, activities: string, description: string) {
    this.user = user;
    this.school = school;
    this.degree = degree;
    this.fieldOfStudy = fieldOfStudy;
    this.start = start;
    this.stop = stop;
    this.grade = grade;
    this.activities = activities;
    this.description = description;
  }
}
