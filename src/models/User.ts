import { Eventing } from "./eventing";
import { Sync } from './Sync';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number,
  name?: string,
  age?: number
};

const rootUrl = 'http://localhost:300/users';

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public attributes: Attributes<UserProps>;

  constructor(attrs: UserProps){
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }
}
