'use strict';

class UserClass{
  constructor(name, sname, age){
    this.name = name;
    this.sname = sname;
    this.age = age;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }
  isAdult(){
    return this.age>=ADULT_AGE;
  }
}

const u2 = new UserClass('Tim', 'Le', 15);