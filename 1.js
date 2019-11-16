function biodata (name, age) {
	var address = "Jl. kenanga Desa gapura Suci Kec. Pelepat Kab. Bungo Prov. Jambi";
	var hobbies = ["Dance", "Music", "Badminton"];
	var is_married = false;
	var list_school = [
					{name: 'SMA NEGERI 1 PELEPAT ILIR', year_in: 2010, year_out: 2013, major: "IPA"},
					{name: 'UNIVERSITAS NEGERI JENDERAL SOEDIRMAN', year_in: 2013, year_out: 2018, major: "Accounting"},
				        ];
	var skills = [
					{skill_name: 'Accounting', level: 'advanced'},
					{skill_name: 'Ms. Office', level: 'advanced'},
					{skill_name: 'HTML', level: 'beginner'},
                    {skill_name: 'CSS', level: 'beginner'},
                    {skill_name: 'Javascript', level: 'beginner'},
                    {skill_name: 'PHP', level: 'beginner'},

				],
	var interest_in_coding = true;

	var result = {name: name, age: age, address: address, hobbies: hobbies, 
					is_married: is_married, list_school: list_school, skills: skills,
					interest_in_coding: interest_in_coding};

	return JSON.stringify(result);
}

console.log(biodata("iis Kurniasih", 25));