export const get = (req, res, next) => {
  console.log(req.session);
  res.json({ test: 'TEST API' });
};
