'use strict';

/*
1. Инкапсуляция
2. Наследование
3. Полиморфизм
*/
class User{
  constructor(name, sname, age){
    this.name = name;
    this.sname = sname;
    this.age = age;
    this.isBan = false;
  }
  getFullName(){
    return `${this.name} ${this.sname}`;
  }
  static isUser(obj){
    return obj instanceof User;
  }
}

class Moderator extends User{
  constructor(name, sname, age, rule){
    super(name, sname, age);
    this.rule = rule;
  }
  addMessage(message){}
  removeMessage(id){}
}

// создать класс Админ, который наследует юзера 
// и имеет дополнительные методы: // забанить/разбанить юзера

class Admin extends User{
  constructor(name, sname, age, mail){
    super(name, sname, age);
    this.mail = mail;
  }
  toggleBan(obj){
    if(User.isUser(obj)){
      obj.isBan = !obj.isBan; //  true = !false
    }
  }
}
const user = new User('Test', 'Stest', 33);
const admin = new Admin('Elon', 'Musk', 50, 'musk@gmail.com');
const moder = new Moderator('Test', 'Stest', 33, true);

class Owner extends Admin{

}

class God extends Owner{}