
const printBoard = (currentField) => {
    currentField.print();
}

const updateCurrentPosition = (direction, position) => {
    switch (direction) {
        case 'u':
            position[0] -= 1;
            break;
        case 'd':
            position[0] += 1;
            break;
        case 'l':
            position[1] -= 1;
            break;
        case 'r':
            position[1] += 1;
            break;
        default:
            console.log('Error: Invalid entree');
    }
}

// const nextMove = () => {
//     process.stdout.write('Which way do you want to move? ');
//     process.stdin.on('data', updateBoard);
// } 

// const updateBoard = (userInput) => {
//     let input = userInput.toString().trim();
//     process.stdout.write(input);
//     process.exit();
// }

module.exports = { printBoard, updateCurrentPosition };