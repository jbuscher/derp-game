module.exports = {

    ROWS: 20,
    COLS: 40,
    gameboard: [],
    skeltonCount: 0,

    init: function() {
        this.gameboard = [];
        for (var i = 0; i < this.ROWS; i++) {
            var column = [];
            for (var j = 0; j < this.COLS; j++) {
                column.push({});
            }
            this.gameboard.push(column);
        }
        this.initPlayerSquares();
    },

    initPlayerSquares: function() {
        for (var i = 0; i < this.ROWS/2; i++) {
            for (var j = 0; j < this.COLS; j++) {
                this.gameboard[i][j] = {
                    playerSquareOwnership: '1'
                };
            }
        }
        
        for (var i = this.ROWS/2; i < this.ROWS; i++) {
            for (var j = 0; j < this.COLS; j++) {
                this.gameboard[i][j] = {
                    playerSquareOwnership: '2'
                };
            }
        }
    }
}