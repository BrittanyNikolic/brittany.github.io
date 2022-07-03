function main(list) {
	let currNum = list.shift();
	while (currNum != "End" && currNum != undefined) {
		let sum = 0;
		for (let num = currNum; num > 0; num = Math.floor(num / 10)) {
			sum += num % 10;
		}
		console.log(SubmitEvent);
		currNum = list.shift();
	}
}

main([157, 99, 5, 438, "End"]);
