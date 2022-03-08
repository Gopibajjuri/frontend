export class User {
  id: number | undefined;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  headLine: string;
  mailId: string;
  dob: Date;
  gender: string;
  address: string;
  phoneNo: number;


  constructor(username: string, password: string, firstName: string, lastName: string, headLine: string, mailId: string, dob: Date, gender: string, address: string, phoneNo: number) {
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.headLine = headLine;
    this.mailId = mailId;
    this.dob = dob;
    this.gender = gender;
    this.address = address;
    this.phoneNo = phoneNo;
  }


}
