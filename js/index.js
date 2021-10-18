'use strict';
/*
1. Инкапсуляция
2. Наследование +
3. Полиморфизм
*/

class Figure{
  constructor(name){
    this.name = name;
  }
  getArea(){}
}

class Rect extends Figure{
  
}

class Square extends Figure{
  constructor(a){
    super('Square');
    this.a = a;
  }
  getArea(){
    return this.a*this.a;
  }
}


class Triangular extends Figure{
  constructor(a,b,angle){
    super('Triangular');
    this.a = a;
    this.b = b;
    this.angle = angle;
  }
  getArea(){
    return this.a*this.b*Math.sin(this.angle*(180/Math.PI));
  }
}
class Circle extends Figure{
  constructor(r){
    super('Circle');
    this.r = r;
  }
  getArea(){
    return this.r*this.r*Math.PI;
  }
}
const t = new Triangular(3,4, 45);
const c = new Circle(10);

function getAreaFigure(figure){
  return figure.getArea();
}
