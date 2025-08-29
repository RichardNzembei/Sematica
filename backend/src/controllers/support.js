const createSupportTicket = async (req, res, next) => {
  try {
    // Placeholder for support ticket creation
    res.json({ message: 'Support ticket created' });
  } catch (error) {
    next(error);
  }
};

module.exports = { createSupportTicket };