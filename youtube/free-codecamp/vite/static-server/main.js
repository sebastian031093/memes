import object from './file';
import classes from './style.module.css';

console.log(`Hello World ${object.codeName}`);
console.log(classes);

document.querySelector('h1').className = classes.style;
