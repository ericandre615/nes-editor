export const createDataGrid = (cols = 8, rows = 8) => {
  const createRows = Array(rows).fill(null);
  return createRows.map(() => Array(cols).fill(null));
};

export default {
  createDataGrid,
};
