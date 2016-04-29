function printToPdf() {
	var doc = new jsPDF('p', 'pt', 'letter');
	
	doc.fromHTML($('body')[0], function(){
		'width': 170
		doc.save();
	});
}
