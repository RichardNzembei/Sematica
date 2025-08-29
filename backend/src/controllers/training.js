const getTraining = async (req, res, next) => {
  try {
    // Mock training playbook
    const playbook = {
      ecommerce: { steps: ['Setup business', 'Add products', 'Configure automation'] },
      restaurant: { steps: ['Setup profile', 'Add menu', 'Configure reservations'] },
    };
    res.json(playbook[req.params.category] || {});
  } catch (error) {
    next(error);
  }
};

module.exports = { getTraining };