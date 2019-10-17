function Animal(color, weight) {
    this.color = color;
    this.weight = weight;
}

Animal.prototype.eat = function() {
    console.log('mia mia mia')
}
Animal.prototype.sleep = function() {
    console.log('zzzz')
}

function Mammal(color, weight) {
    Animal.call(this, color, weight);
} //给显性属性的继承方式

Mammal.prototype = Object.create(Animal.prototype) //隐性属性的继承方式
Mammal.prototype.constructor = Mammal; //给构造器重新赋值
Mammal.prototype.suckle = function() {
    console.log('good milk')
}

function Person(color, weight) {
    Mammal.call(this, color, weight);
}

Person.prototype = Object.create(Mammal.prototype)
Person.prototype.constructor = Person;
Person.prototype.lie = function() {
    console.log('cute!')
}

var lsd = new Person();
console.log('lsd:', lsd);