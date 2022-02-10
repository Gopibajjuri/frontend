export class User {
  private id: number | undefined;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  headLine: string;
  mailId: string;
  dob: string;
  gender: string;
  address: string;
  phoneNo: number;


  constructor(username: string, password: string, firstName: string, lastName: string, headLine: string, mailId: string, dob: string, gender: string, address: string, phoneNo: number) {
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
