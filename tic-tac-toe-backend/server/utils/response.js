export const sendResponse = (res, data, msg) => {
  try {
    res.status(200).json({ msg, data });
  } catch (errors) {
    res.status(500).json({ msg: 'Internal server error', errors });
  }
};
