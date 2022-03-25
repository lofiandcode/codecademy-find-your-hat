const prompt = require('prompt-sync')({sigint: true});
const { printBoard } = require('./modules/functions');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

const main = () => {
    printBoard();
}

main();
