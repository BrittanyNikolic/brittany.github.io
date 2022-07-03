function main(power) {
	let output = "";
	for (let i = 0; i <= power; i += 2) {
		let result = Math.pow(2, i);
		if (i > 0) {
			output += ", ";
		}
		output += result;
	}

	console.log(output);
}
main(10);
main(7);
