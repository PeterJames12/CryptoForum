import {User} from "./user.model";
import {Request} from "./request.model";

export interface Comment {
  id?: number,
  sender: User,
  subject: string,
  text: string,
  createDateAndTime: Date,
  updateDateAndTime?: Date
}
