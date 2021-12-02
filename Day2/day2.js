const part1 = (d) => {
	const map1 = d.map((x) => x.split(" "));

	let horizontalPos = 0;
	let depth = 0;

	for (let i = 0; i < map1.length; ++i) {
		if (map1[i][0][0] === "f") {
			horizontalPos += parseInt(map1[i][1]);
		}
		if (map1[i][0][0] === "d") {
			depth += parseInt(map1[i][1]);
		}
		if (map1[i][0][0] === "u") {
			depth -= parseInt(map1[i][1]);
		}
	}
	return depth * horizontalPos;
};

const part2 = (d) => {
	const map1 = d.map((x) => x.split(" "));

	let horizontalPos = 0;
	let depth = 0;
	let aim = 0;

	for (let i = 0; i < map1.length; ++i) {
		if (map1[i][0][0] === "f") {
			horizontalPos += parseInt(map1[i][1]);
			depth += aim * parseInt(map1[i][1]);
		}
		if (map1[i][0][0] === "d") {
			aim += parseInt(map1[i][1]);
		}
		if (map1[i][0][0] === "u") {
			aim -= parseInt(map1[i][1]);
		}
	}
	return depth * horizontalPos;
};

console.log(part1(data));
console.log(part2(data));
