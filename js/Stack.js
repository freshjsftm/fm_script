class Stack{
  constructor(maxSize=5, ...args){
    this._maxSize = maxSize; //set get
    this._size = 0;
    for (const argument of args) {
      this.push(argument);
    }
  }
  get size(){
    return this._size;
  }
  get isEmpty(){
    return this._size===0;
  }
  push(argument){
    if(this.size>=this._maxSize){
      throw new RangeError('Stack overflow!');
    }
    this[`_${this.size}`] = argument;
    this._size++;
    return this.size;
  }
  pick(){
    return this[`_${this.size-1}`];
  }
  pop(){
    if(this.isEmpty){    //this.size<=0
      return;
    }
    const lastItem = this[`_${this.size-1}`];
    delete this[`_${this.size-1}`];
    this._size--;
    return lastItem;
  }
}
const stack1 = new Stack(3);



