export class User {
  id: number | undefined;
  username: string;
  password: string;


//fgvbhk
  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}
