function thirdHighest(data){
	if (Array.isArray(data) == true) {
		if (data.length > 2) {
			data.sort((a, b) => {
				return b-a
			});

			return data[2]
		} else {
			return "Minimal array length is 3!";
		}
	} else {
		return "Parameter should be an array!";
	}
}

var data = [1,2,3,4,5,6];
console.log(thirdHighest(data));