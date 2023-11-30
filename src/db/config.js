import { Sequelize } from "sequelize";

const sequelize = new Sequelize("myProject", "postgres", "killerkip786", {
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  logging: false,
});

export const connectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB sync");
  } catch (error) {
    console.error("DB sync", error);
  }
};
export default sequelize;
