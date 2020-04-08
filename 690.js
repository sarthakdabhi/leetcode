const employees = [[1, 5, [2, 3]], [2, 3, [1]], [3, 3, []]];
const id = 1;

// With recursion
// var GetImportance = function(employees, id) {
// 	for (let employee of employees) {
// 		if (id == employee[0])
// 		{
// 			let imp = employee[1];
// 			if (employee[2].length == 0) return employee[1];
// 			else {
// 				for (let sub of employee[2])
// 					imp += GetImportance(employees,sub);
// 				return imp;
// 			}
// 		}
// 	}
// };

// Without recursion
var GetImportance = function(employees, id) {
	let imp = 0, chain = [id], done = [];
	while (chain.length > 0) {
		for (let employee of employees) {
			if (chain[0] == employee[0]) {
				imp += employee[1];
				done.push(chain[0]);
				chain.shift();
				chain = chain.concat(employee[2].filter(v => done.indexOf(v) == -1));
			}
		}
	}
	return imp;
};

console.log(GetImportance([[1,2,[2]], [2,3,[1]]], 2));
