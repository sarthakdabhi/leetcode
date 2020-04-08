const employees = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]];
const id = 1;

// With recursion
var GetImportance = function(employees, id) {
	for (let employee of employees) {
		if (id == employee[0])
		{
			let imp = employee[1];
			if (employee[2].length == 0) return employee[1];
			else {
				for (let sub of employee[2])
					imp += GetImportance(employees,sub);
				return imp;
			}
		}
	}
};

// Without recursion
var GetImportance = function(employees, id) {
	let imp = 0, chain = [id];
	while (chain.length > 0) {
		for (let employee of employees) {
			if (chain[0] == employee[0]) {
				chain.shift();
				imp += employee[1];
				chain = chain.concat(employee[2]);
			}
		}
	}
	return imp;
};

console.log(GetImportance(employees, id));
