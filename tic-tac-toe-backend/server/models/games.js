import { v4 } from 'uuid';
import { placeMove } from '../utils/tictactoe-ai';

const STATUS = Object.freeze({
  running: 'RUNNING',
  x_won: 'X_WON',
  o_won: 'O_WON',
  draw: 'DRAW'
});

export const GamesModel = () => {
  const games = [];
  return {
    getAll: () => games,
    getOne: (id) => games.find((game) => game.id === id) || null,
    deleteOne: (id) => (games = games.filter(game.id !== id)),
    create: (board) => {
      const game = {
        id: v4(),
        board,
        status: STATUS.running
      };
      games.push(game);
      return game;
    },
    updateOne: (id, board) => {
      const game = games.find((game) => game.id === id);

      if (!game) {
        return null;
      }

      game.board = board;
      game.board = placeMove(game.board);
      return game;
    }
  };
};
