import Game from "../models/Game.js";

export const getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

export const addGame = async (req, res) => {
  const game = await Game.create(req.body);
  res.json(game);
};

export const updateGame = async (req, res) => {
  const updated = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteGame = async (req, res) => {
  const deleted = await Game.findByIdAndDelete(req.params.id);
  res.json(deleted);
};
