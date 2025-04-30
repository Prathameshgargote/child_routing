import { Injectable } from '@angular/core';
import { Iuser } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  usersArr: Array<Iuser> = [
    { userName: 'John', userId: '123', userRole: 'Candidate' },
    { userName: 'Emma', userId: '124', userRole: 'Admin' },
    { userName: 'Liam', userId: '125', userRole: 'SuperAdmin' },
    { userName: 'Olivia', userId: '126', userRole: 'Candidate' },
    { userName: 'Noah', userId: '127', userRole: 'Admin' },
    { userName: 'Ava', userId: '128', userRole: 'SuperAdmin' },
    { userName: 'William', userId: '129', userRole: 'Candidate' },
    { userName: 'Sophia', userId: '130', userRole: 'Admin' },
    { userName: 'James', userId: '131', userRole: 'SuperAdmin' },
    { userName: 'Isabella', userId: '132', userRole: 'Candidate' },
  ];
  constructor() {}

  fetchAllUser() {
    return this.usersArr;
  }

  getSingleUser(Id: string) {
    return this.usersArr.find((data) => data.userId === Id)!;
  }

  updateuser(updateObj: Iuser) {
    let getindex = this.usersArr.findIndex(
      (p) => p.userId === updateObj.userId
    );
    console.log(getindex);
    return (this.usersArr[getindex] = updateObj);
  }

  Adduser(newObj: Iuser) {
    return this.usersArr.push(newObj);
  }

  Removeuser(remove: Iuser) {
    let getindex = this.usersArr.findIndex(
      (user) => user.userId === remove.userId
    );
    return this.usersArr.splice(getindex, 1);
  }
}
