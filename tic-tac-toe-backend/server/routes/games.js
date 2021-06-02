import express from 'express';
import { body, validationResult } from 'express-validator';

import { GamesModel } from '../models/games';
import { sendResponse } from '../utils/response';

const router = express.Router();
const gameModel = GamesModel();

router.get('/', (_req, res) => sendResponse(res, gameModel.getAll()));

router.post('/', body('board').isString(), (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({message: 'Bad Request', errors: errors.array() });
  }

  const { board } = req.body;
  const game = gameModel.create(board);

  return sendResponse(res, {
    location: `/${game.id}`
  });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const game = gameModel.getOne(id);

  if (!game) {
    return res.status(404).json({
      errors: [
        {
          message: 'Resource not found'
        }
      ]
    });
  }

  return sendResponse(res, game);
});

router.put('/:id', (req, res) => {
  const id = req.params.id;
  const { board } = req.body;
  const game = gameModel.updateOne(id, board);

  if (!game) {
    return res.status(404).json({
      errors: [
        {
          message: 'Resource not found'
        }
      ]
    });
  }

  return sendResponse(res, game, 'Move successfully registered');
});

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const game = gameModel.getOne(id);

  if (!game) {
    return res.status(404).json({
      errors: [
        {
          message: 'Resource not found'
        }
      ]
    });
  }
  sendResponse(res, { message: 'Game successfully deleted'});
});

export { router };
