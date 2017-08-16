import {User} from"./user.model";
import {Topic} from "./topic.model";

export interface Message {
  id?: number,
  sender: User,
  recipient?: User,
  topic?: Topic,
  text: string,
  dateAndTime: Date,
  read: boolean
}
