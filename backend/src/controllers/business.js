const { connectDB } = require('../config/db');

const setupBusiness = async (req, res, next) => {
  console.log('Starting business setup with data:', {
    app_type: req.body.app_type,
    business_name: req.body.business_name,
    product_categories: req.body.product_categories,
    store_type: req.body.store_type,
    cuisine_type: req.body.cuisine_type,
    seating_capacity: req.body.seating_capacity,
    delivery_option: req.body.delivery_option,
    business_email: req.body.business_email,
    phone: req.body.phone,
    address: req.body.address,
    user_id: req.user.id,
  });
  try {
    const {
      app_type,
      business_name,
      product_categories,
      store_type,
      cuisine_type,
      seating_capacity,
      delivery_option,
      business_email,
      phone,
      address,
    } = req.body;
    if (!app_type || !business_name || !business_email || !phone || !address) {
      console.error('Business setup failed: Missing required fields');
      return res.status(400).json({ message: 'Missing required fields' });
    }
    if (app_type === 'E-Commerce' && (!product_categories || !store_type)) {
      console.error('Business setup failed: Missing E-Commerce fields');
      return res.status(400).json({ message: 'Missing product categories or store type' });
    }
    if (app_type === 'Restaurant' && (!cuisine_type || !seating_capacity || !delivery_option)) {
      console.error('Business setup failed: Missing Restaurant fields');
      return res.status(400).json({ message: 'Missing cuisine type, seating capacity, or delivery option' });
    }
    const connection = await connectDB();
    await connection.execute(
      `INSERT INTO businesses (
        user_id, app_type, business_name, product_categories, store_type,
        cuisine_type, seating_capacity, delivery_option, business_email, phone, address
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        req.user.id,
        app_type,
        business_name,
        product_categories || null,
        store_type || null,
        cuisine_type || null,
        seating_capacity || null,
        delivery_option || null,
        business_email,
        phone,
        address,
      ]
    );
    console.log('Business setup successful:', { business_name });
    res.status(201).json({ message: 'Business created' });
  } catch (error) {
    console.error('Business setup failed:', error.message);
    if (error.code === 'ER_DUP_ENTRY' && error.message.includes('business_name')) {
      return res.status(400).json({ message: 'Business name already taken' });
    }
    next(error);
  }
};

module.exports = { setupBusiness };