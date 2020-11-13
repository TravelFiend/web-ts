import { Eventing } from './Eventing';
import Axios, { AxiosResponse } from 'axios';

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(
    public rootUrl: string,
    public deserialize: (json: K) => T
    ){};

  get on() {
    return this.events.on;
  };

  get trigger() {
    return this.events.trigger;
  };

  fetch(): void {
    Axios.get(this.rootUrl)
      .then((res: AxiosResponse) => {
        res.data.forEach((val: K) => {
          this.models.push(this.deserialize(val));
        });

        this.trigger('change');
      });
  };
};