export const get = (req, res, next) => {
  console.log(req.sessionID);
  res.json({ test: 'TEST API' });
};
