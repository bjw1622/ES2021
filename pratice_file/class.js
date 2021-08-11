// 'use strict';

// class Person{
//   constructor(name,age){
//     this.name = name;
//     this.age = age;
//   }

//   speak(){
//     console.log(`${this.name}: hello! 나는 ${this.age}살 입니다.`)
//   }
// }
// const jay = new Person('백재원',25);
// jay.speak()

//2.Getter and Setter
class User{
  constructor(firstname,lastName,age){
    this.firstname = firstname;
    this.lastName = lastName;
    this.age = age;
  }

  get age(){
    return this._age;
  }
  set age(value){
    this._age = value;
    if(value < 0){
      this._age = 0
    }
    return this._age;
  }

}
const jay = new User('재원','백',-231);
console.log(jay.age);
