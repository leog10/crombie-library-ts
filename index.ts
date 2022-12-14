import app from './app';
import { PORT } from './src/config/config.js';
import sequelize from './src/models';

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database initialized');
    // sequelize.sync({ force: true });
    app.listen(PORT);
    console.log(`Server listening on http://localhost:${PORT}/`);
  } catch (error) {
    console.error(error);
  }
};

main();
