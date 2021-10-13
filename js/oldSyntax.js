'use strict';

function User(name, sname, age){
  this.name = name;
  this.sname = sname;
  this.age = age;
}

// User.amount = 0;
// User.createTest = function(){
//   return new User('anonim', 'anonimovich', 55);
// }

function UserProto(){
  this.getFullName = function(){
    return `${this.name} ${this.sname}`;
  }
}

User.prototype = new UserProto();


const u1 = new User('Elon', 'Musk', 50);


