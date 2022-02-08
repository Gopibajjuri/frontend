export class User {
  id: number | undefined;
  username: string;
  password: string;



  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
