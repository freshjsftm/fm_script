'use strict';
/*
1. Инкапсуляция
2. Наследование +
3. Полиморфизм
*/

/*
Белка
имя, цвет
прыгать

Белка-летяга
имя, цвет, максимальное расстояние полета
прыгать, летать

Белка-Пушкина
имя, цвет, максимальное расстояние полета, массив песен
прыгать, летать, танцевать, петь(поет все песни)
*/

class Squirrel{
  constructor(name, color){
    this.name = name;
    this.color = color;
  }
  jump(){
    return 'i\'m jumping';
  }
}
class SquirrelFly extends Squirrel{
  constructor(name, color, maxDist){
    super(name, color);
    this.maxDist = maxDist;
  }
  fly(){
    return `i'm flying ${this.maxDist}`;
  }
}
class SquirrelMagic extends SquirrelFly{
  constructor(name, color, maxDist, songs){
    super(name, color, maxDist);
    this.songs = songs;
  }
  sing(){
    return `i'm sing: ${this.songs.join(',')}.`;
  }
  sing2(){
    this.songs.forEach((song)=>{console.log(song)});
  }
  dance(){
    return 'i\'m dancing';
  }
}

const pushkin = new SquirrelMagic('Magic','rainbow',888,['song 1', 'it\'s my love', 'i liked move']);
pushkin.sing2();
console.log(pushkin.sing());
console.log(pushkin.dance());
console.log(pushkin.fly());
console.log(pushkin.jump());
