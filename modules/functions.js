const Field = require('./classes.js');

const myField = new Field([
    ['*', '░', 'O','░'],
    ['░', '░', '░','░'],
    ['░', 'O', '░','O'],
    ['░', '░', '░','░'],
    ['░', '^', '░','░'],
]);

const printBoard = () => {
    myField.print();
    console.log('Which way do you want to move? ')
}

module.exports = { printBoard };