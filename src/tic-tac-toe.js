class TicTacToe {
    constructor() {
        this.field = [[null, null, null], [null, null, null], [null, null, null]];
        this.currentPlayerSymbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[columnIndex][rowIndex] === null){
            this.field[columnIndex][rowIndex] = this.currentPlayerSymbol;
            /*console.log(this.isFinished());
            console.log(this.getWinner());
            console.log(this.noMoreTurns());
            console.log(this.isDraw());
            console.log(this.getFieldValue(2, 1));
            console.log(this.getCurrentPlayerSymbol());*/

        } else {
            return;
        }
            

        this.currentPlayerSymbol === 'x' ? this.currentPlayerSymbol = 'o' : this.currentPlayerSymbol = 'x';        
    }

    isFinished() {
        if (this.getWinner() === null && this.noMoreTurns() === false){
            return false;
        } else return true;
    }

    getWinner() {
        const row = this.checkRows();
        const col = this.checkCols();
        const diag = this.checkDiagonals();
        return row || col || diag || null;
    }

    noMoreTurns() {
        const array = this.flatSingle(this.field);
        const flag = array.includes(null);
        return !flag;
    }

    isDraw() {
        if (this.isFinished() !== true || this.getWinner() !== null){
            return false;
        } else return true;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[colIndex][rowIndex];
    }

    checkRows(sendField){
        let symbol = null;
        let flag = false;

        let field = (sendField === undefined ? this.field : sendField);

        field.forEach(item => {
            if (item[0] === item[1] && item[1] === item[2] && item[0] !== null){
                flag = true;
                symbol = item[0];
            }
        });

        if (flag === true && symbol !== null){
            return symbol;
        } else return flag;
    }

    checkCols(){
        let sendField = this.field[0].map((col, i) => this.field.map(row => row[i]));

        const checkRow = this.checkRows(sendField);

        if (checkRow !== null){
            return checkRow;
        } else return false;
    }

    checkDiagonals(){
        let sendField = [[], []];

        this.field.forEach((item, index) => {
            sendField[0].push(this.field[index][index]);
            sendField[1].push(this.field[index][this.field.length - 1 - index]);
        });

        const checkRow = this.checkRows(sendField);

        if (checkRow !== null){
            return checkRow;
        } else return false;
    }

    flatSingle(arr){
        const array = [].concat(...arr);
        return array;
    }
        
}

module.exports = TicTacToe;
