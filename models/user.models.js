module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      profile_img: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      dob: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      phone_no: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sub: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      subscription_key: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    return User;
}