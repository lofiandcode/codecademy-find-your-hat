class Field {
    constructor(field) {
        this._field = field;
    }
    get field() {
        return this._field;
    }
    print() {
        this._field.forEach(subArray => {
            console.log(subArray.join(''));
        })
    }
    static generateField(height, width, percentHoles) {
        const hat = '^';
        const hole = 'O';
        const fieldCharacter = '░';
        const pathCharacter = '*';

        //Create blank field of the given height and width
        const arr = new Array(height).fill('0');
        const newField = arr.map((element) => new Array(width).fill(fieldCharacter));

        //Add the percentage of holes given
        newField.forEach((element, idx1) => {
            element.forEach((el, idx2) => {
                const rand = Math.floor(Math.random() * 100)
                if (rand < (percentHoles * 100)) {
                    newField[idx1][idx2] = hole;
                    return;
                }
            })
        })

        //Add hat
        const column = Math.floor(Math.random() * (height - 1)) + 1;
        const row = Math.floor(Math.random() * (width - 1)) + 1;
        newField[column][row] = hat;

        //Add path character
        newField[0][0] = pathCharacter;
        
        return newField;
    }
}
module.exports = Field;