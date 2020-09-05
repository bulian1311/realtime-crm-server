import generalSequelize from "./general.sequelize";

export const authenticate = async () => {
  try {
    await generalSequelize.authenticate();
    // User.sync({ force: true }).then(() => {
    //   return Product.create({
    //     name: 'Test',
    //     password: '12345'
    //   });
    // });
    console.log("Connection to general db has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
