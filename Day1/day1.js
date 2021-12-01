const part1 = (d) => {
	return d.filter((elem, index, arr) => elem > arr[index - 1]).length;
};

const part2 = (d) => {
	const slidingWindowArray = [];
	for (let i = 0; i < d.length - 2; ++i) {
		slidingWindowArray.push(d[i] + d[i + 1] + d[i + 2]);
	}
	return part1(slidingWindowArray);
};

console.log(part1(data));
console.log(part2(data));
