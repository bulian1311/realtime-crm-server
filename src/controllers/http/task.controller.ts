import asyncHandler from "express-async-handler";

import Task from "#root/models/task.model";

export const getAllTasks = asyncHandler(async (req, res) => {
  const tasks = await Task.findAll();

  res.send(tasks);
});
