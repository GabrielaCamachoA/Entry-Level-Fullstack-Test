/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.changeColumn('users', 'email', {
    type: Sequelize.STRING(255),
    allowNull: false
  });

  await queryInterface.changeColumn('users', 'password', {
    type: Sequelize.STRING(255),
    allowNull: false
  });
  await queryInterface.addColumn('users', 'nombre', {
    type: Sequelize.STRING(255),
    allowNull: false
  });
  await queryInterface.addColumn('users', 'apellidos', {
    type: Sequelize.STRING(255),
    allowNull: false
  });
}

export async function down(queryInterface, Sequelize) {
  await queryInterface.changeColumn('users', 'email', {
    type: Sequelize.TEXT,
    allowNull: false
  });

  await queryInterface.changeColumn('users', 'password', {
    type: Sequelize.TEXT,
    allowNull: false
  });
}
