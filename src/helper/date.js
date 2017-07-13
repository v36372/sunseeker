const dayBefore = () => {
	let d = new Date();
	d.setDate(d.getDate()-1);
	let date_before = ("0" + d.getDate()).slice(-2);
	let curr_month = ("0" + (d.getMonth() + 1)).slice(-2); //Months are zero based
	let curr_year = d.getFullYear();

	return date_before + "" + curr_month + "" + curr_year;
};

export default dayBefore
