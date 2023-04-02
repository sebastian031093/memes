/////////////////////////////////////////////////////////////
///let, const and vas (never use VAR)
/*
var namex = 'sebas';
namex = 'juju';

console.log(namex);

const nameConst = 'sebas';
nameConst = 'miguel';
console.log(nameConst);
*/

///////////////////////////////////////////////////////////////////////////////////////
//////funtions
/*
function hello(name) {
  console.log(name);
}

const helloArrow = name => {
  console.log(name);
};

const helloExpresion = function (name) {
  console.log(name);
};

hello('sebas');
helloArrow('juju');
helloExpresion('miguel');
*/

///////////////////////////////////////////////////////////////////////////////////////
//////Clases
/*
class Human {
  constructor() {
    this.geneder = 'male';
  }

  printGeder() {
    console.log(this.geneder);
  }
}

class Person extends Human {
  constructor(name, deegre) {
    super();
    this.name = name;
    this.deegre = deegre;
  }

  hi() {
    console.log(
      `Hi from Person class, my ${this.name} and i'm a pro in ${this.deegre}`
    );
  }
}

const sebas = new Person('sebastian', 'CS');
sebas.hi();
sebas.printGeder();
*/

///////////////////////////////////////////////////////////////////////////////////////
//////Clases (ES6 NOTACOIN )
/*
class Human {
  //you don't need contructors functions to set properties in the clases
  #geneder = 'male';

  printGeder() {
    console.log(this.#geneder);
  }
}

class Person extends Human {
  name = 'seabstian';
  deegre = 'CD';

  hi() {
    console.log(
      `Hi from Person class, my ${this.name} and i'm a pro in ${this.deegre}`
    );
  }
}

const sebas = new Person();
sebas.hi();
sebas.printGeder();
*/
