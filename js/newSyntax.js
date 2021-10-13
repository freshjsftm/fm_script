'use strict';
class UserClass{
  /**
   * 
   * @param {string} name 
   * @param {string} sname 
   * @param {number} age 0-150
   */
  constructor(name, sname, age){
    this.name = name;
    this.sname = sname;
    this.age = age;//вызов setter
  }
  get age(){
    return this._age;
  }
  set age(age){
    if(typeof age !== 'number'){
      throw new TypeError('Age must be number');
    }
    if(age<0 || age>MAX_AGE){
      throw new RangeError(`Age must be >0 and < ${MAX_AGE}. `)
    }
    this._age = age;
  }
  get fullName(){
    return `${this.name} ${this.sname}`;
  }
  set fullName(newFullName){
    if(typeof newFullName !== 'string'){
      throw new TypeError('Name must be string');
    }
    const arrFullName = newFullName.split(' ');
    if(arrFullName.length !== 2){
      throw new RangeError(`must be = 2. `)
    }
    this.name = arrFullName[0];
    this.sname = arrFullName[1];
  }
  get isAdult(){
    return this.age>=ADULT_AGE;
  }

  static createTestUser(){
    return new UserClass('Test', 'Stest', 35);
  }
}



const u2 = new UserClass('Tim', 'Le', 35);
const u3 = new UserClass('Brus', 'Le', 75);
u2.age = 48;//setter
console.log(u2.age)//getter
//console.log(u2._age)//НЕЛЬЗЯ ОБРАЩАТЬСЯ ВНЕ КЛАССА!!!!!!!!!!!!

/*
Создать класс Работник
имя, фамилия, ставка за день, кол-во отработанных дней
метод считает зарплату
*/
class Woker{
  constructor(name, sname, rate, days){
    this.name = name;
    this.sname = sname;
    this.rate = rate;
    this.days = days;
  }
  get salary(){
    return this.rate*this.days;
  }
}
const w1 = new Woker('Elon','Musk',20,5);
//console.log(w1.salary)