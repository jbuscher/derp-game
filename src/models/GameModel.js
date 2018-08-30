module.exports = {

  ROWS: 20,
  COLS: 40,
  gameboard: [],
  skeletons: [],

  init() {
    this.gameboard = [];
    for (let i = 0; i < this.ROWS; i += 1) {
      const column = [];
      for (let j = 0; j < this.COLS; j += 1) {
        column.push({});
      }
      this.gameboard.push(column);
    }
    this.initPlayerSquares();
  },

  initPlayerSquares() {
    for (let i = 0; i < this.ROWS / 2; i += 1) {
      for (let j = 0; j < this.COLS; j += 1) {
        this.gameboard[i][j] = {
          playerSquareOwnership: '1',
        };
      }
    }

    for (let i = this.ROWS / 2; i < this.ROWS; i += 1) {
      for (let j = 0; j < this.COLS; j += 1) {
        this.gameboard[i][j] = {
          playerSquareOwnership: '2',
        };
      }
    }
  },
};
