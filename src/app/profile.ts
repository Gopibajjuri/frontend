import {User} from "./user";

export class Profile {
  id :number | undefined;
  user_id: number | undefined;
  firstname: string;
  lastname: string;
  headline: string;
  mail_id: string;
  dob: string;
  gender: string;
  address: string;
  phone_no: number;


  constructor(firstname: string, lastname: string, headline: string, mail_id: string, dob: string, gender: string, address: string, phone_no: number) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.headline = headline;
    this.mail_id = mail_id;
    this.dob = dob;
    this.gender=gender;
    this.address = address;
    this.phone_no = phone_no;

  }


}
