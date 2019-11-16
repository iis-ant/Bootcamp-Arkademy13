function printWord(data) {
	var voc = "";
	var res = voc.toLowerCase();
	var kons = "";

	for (var i = 0; i < data.length; i++) {
		if (data[i] == 'A' || data[i] == 'I' || data[i] == 'U' || data[i] == 'E' || data[i] == 'O') {
			res = res + data[i] + '\n'
		} else {
			kons = kons + data[i] + '\n'
		}
	}
	console.log(res+kons);
}

printWord("ARKADEMY")