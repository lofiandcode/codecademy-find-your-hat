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
}
module.exports = Field;