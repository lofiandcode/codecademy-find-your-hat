const prompt = require('prompt-sync')({sigint: true});
const { updateCurrentPosition } = require('./modules/functions');
const Field = require('./modules/classes.js');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
let currentPosition = [0, 0];

const main = () => {

    //Create new game field
    const newField = new Field(Field.generateField(6, 6, 0.2));
    
    let game = true;
    while (game) {
        newField.print();
        let n = prompt('Next move? ');

        currentPosition = updateCurrentPosition(n, currentPosition);
        
        if (currentPosition[0] < 0 || currentPosition[1] < 0 || currentPosition[0] >= newField.field.length || currentPosition[1] >= newField.field[0].length) {
            // print your out of bound, lose and quit
            console.log('You went out of bounds! You lose!')
            game = false;
        } else if (newField.field[currentPosition[0]][currentPosition[1]] === hole) {
            //lose and quit
            console.log('You fell in a hole! You lose!')
            game = false;
        } else if (newField.field[currentPosition[0]][currentPosition[1]] === hat) {
            //win and quit
            console.log('You found your hat! You win!')
            game = false;
        } else {
            // update path on board
            newField.field[currentPosition[0]][currentPosition[1]] = pathCharacter;
        }
    }
    
}

main();
