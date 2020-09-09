import homeRouter from "./home.route";
import userRouter from "./user.route";
import taskRouter from "./task.router";
import columnRouter from "./column.router";
import authRouter from "./auth.router";

const routesInit = (expressApp: any) => {
  expressApp.use("/auth", authRouter);
  expressApp.use("/api/v1/", homeRouter);
  expressApp.use("/api/v1/users", userRouter);
  expressApp.use("/api/v1/columns", columnRouter);
  expressApp.use("/api/v1/tasks", taskRouter);
};

export default routesInit;
