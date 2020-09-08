import asyncHandler from "express-async-handler";

import Column from "#root/models/column.model";

export const getAllColumns = asyncHandler(async (req, res) => {
  const columns = await Column.findAll({
    include: [Column.associations.tasks],
  });

  const tasks = columns[0].tasks;

  res.json({ columns, tasks });
});
