//Update current position based on player input
//u = up
//d = down
//l = left
//r = right
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
    return position;
}

module.exports = { updateCurrentPosition };