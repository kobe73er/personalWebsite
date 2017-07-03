/**
 * Created by kobe73er on 17/7/1.
 */
export class Account {
  id: number
  name: string
  password: string
  roles: string


  constructor(id: number, name: string, roles: string, password: string) {
    this.id = id;
    this.name = name;
    this.roles = roles;
    this.password = password
  }
}
