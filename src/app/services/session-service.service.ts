import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  users:Array<User>

  constructor() { }

  signUpUser(user_up)
  {
    this.users.push(user_up)
  }

  getUserByUN(uname)
  {
    return this.users.filter(i=>i.username==uname)
  }


}
