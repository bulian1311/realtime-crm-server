import homeRouter from "#express/routes/home.route";
import userRouter from "#express/routes/user.route";

const routesInit = (expressApp: any) => {
  expressApp.use("/api/v1/", homeRouter);
  expressApp.use("/api/v1/users", userRouter);
};

export default routesInit;
