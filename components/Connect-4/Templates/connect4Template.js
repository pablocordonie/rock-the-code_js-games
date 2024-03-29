export const createBoardGrid = (className, id) => {
    const grid = document.createElement('div');
    grid.className = className;
    grid.id = id;
    return grid;
};