const { CronJob } = require('cron');
const { connectDB } = require('../config/db');

const weeklyInsights = new CronJob('0 0 * * 0', async () => {
  const connection = await connectDB();
  // Placeholder for weekly insights email
  console.log('Sending weekly insights');
});

module.exports = { weeklyInsights };