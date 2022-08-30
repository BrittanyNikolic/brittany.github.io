function main(height) {
	let row = 1;
	while (row <= height) {
		let stars = "";

		let col = 1;

		while (col <= row) {
			stars += "*";
			col++;

			console.log(stars);
		}
		row++;
	}
}
main(5);
