import { User } from './models/User';

const user = new User({ name: 'It\'s A\' Me', age: 25 });

user.save();
