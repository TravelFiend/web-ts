import { User } from './models/User';

const user = new User({ name: 'It\'s A\' Me', age: 25 });


// a quick reminder on accessors

class Person {
  constructor(public firstName: string, public lastName: string){};

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  };
};

const person = new Person('Mike', 'Grace');
console.log(person.fullName);

