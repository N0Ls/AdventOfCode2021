const part1 = (d) => {
	let binaryResult = "";
	for (let i = 0; i < d[0].length; i++) {
		let mostCommonBit =
			d.map((x) => x.at(i)).reduce((a, b) => parseInt(a) + parseInt(b)) >
			d.length / 2
				? 1
				: 0;
		binaryResult += mostCommonBit == 0 ? "0" : "1";
	}
	const gammaRate = parseInt(binaryResult, 2);
	const espilonRate = parseInt(
		binaryResult.replace(/./g, (x) => x ^ 1),
		2
	);
	return gammaRate * espilonRate;
};

const part2 = (d) => {
	let shortenedArrayOxygen = [...d];
	let index = 0;
	while (shortenedArrayOxygen.length > 1 || index > 1200) {
		let mostCommonBit =
			shortenedArrayOxygen
				.map((x) => x.at(index))
				.reduce((a, b) => parseInt(a) + parseInt(b)) >=
			shortenedArrayOxygen.length / 2
				? 1
				: 0;
		shortenedArrayOxygen = shortenedArrayOxygen.filter(
			(x) => x.at(index) == mostCommonBit
		);
		index++;
	}

	let shortenedArrayCO2 = [...d];
	index = 0;
	while (shortenedArrayCO2.length > 1 || index > 1200) {
		let mostCommonBit =
			shortenedArrayCO2
				.map((x) => x.at(index))
				.reduce((a, b) => parseInt(a) + parseInt(b)) >=
			shortenedArrayCO2.length / 2
				? 1
				: 0;
		shortenedArrayCO2 = shortenedArrayCO2.filter(
			(x) => x.at(index) != mostCommonBit
		);
		index++;
	}

	console.log(shortenedArrayOxygen);
	return (
		parseInt(shortenedArrayOxygen[0], 2) * parseInt(shortenedArrayCO2[0], 2)
	);
};

console.log(part1(data));
console.log(part2(data));
