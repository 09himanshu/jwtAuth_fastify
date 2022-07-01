module.exports = (sequelize, Sequelize) => {
  const Auth = sequelize.define("auth", {
    first_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    sub: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
  });
  return Auth;
};
