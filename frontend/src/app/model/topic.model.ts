import {Role} from "./role.model";
export interface Topic {
  id?: number,
  title: string,
  description: string,
  roles: Array<Role>
}
