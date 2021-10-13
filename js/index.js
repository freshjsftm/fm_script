'use strict';


const obj = {
  prop:1,
  _name:"obj",
  get name(){
    return this._name;
  },
  set name(value){
    this._name = value;
  },
};
const obj2 = new Object({prop:1});

//constructor