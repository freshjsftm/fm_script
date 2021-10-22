'use strict';
//деструктуризация-способ создания переменной
const user = {
  privateInfo:{
    id:123,
    name:'Elon',
    sname:'Musk',
    bday:{
      day:28,
      month:6,
      year:1971,
    },
  },
  contactInfo:{
    phone:'123-23-23',
    adress:{
      town:'ZP',
      street:'Sobornuy',
      house:211,  ///////////
    },
    mail: 'elon@gmail.com', //////////
  },
  profession:'director',
}

const {
  privateInfo:
  {
    name:userName,
    sname:userSname,
  },
  contactInfo:{
    phone
  }
} = user;
console.log(userName);
console.log(userSname);
console.log(phone);


// const dayBday = user.privateInfo.bday.day;
// console.log(dayBday)

// const {profession:profUser} = user;
// //const {property:variable} = object;
// console.log(profUser)


// const {profession} = user;

// console.log(profession)