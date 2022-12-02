'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('books_clients', {
      book_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'books', key: 'id' },
        onDelete: 'CASCADE'
      },
      client_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'clients', key: 'id' },
        onDelete: 'CASCADE'
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('books_clients');
  }
};
