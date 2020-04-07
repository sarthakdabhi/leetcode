const grid = 
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]];

var islandPerimeter = function(grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let perimeter = 0;

    for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] == 1) {
				// Edges
				if (i == 0) perimeter++;
				if (i == rows-1) perimeter++;
				if (j == 0) perimeter++;
				if (j == cols-1) perimeter++;

				// up
				if (i-1 >= 0 && grid[i-1][j] == 0) perimeter++;

				// down
				if (i+1 < rows && grid[i+1][j] == 0) perimeter++;

				// left
				if (j-1 >= 0 && grid[i][j-1] == 0) perimeter++;				
				
				// right
				if (j+1 < cols && grid[i][j+1] == 0) perimeter++;
			}
		}    	
    }

    return perimeter;
};

console.log(islandPerimeter(grid));
