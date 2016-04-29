function printToPdf() {
	var doc = new jsPDF('p', 'pt', 'letter');
	
	doc.fromHTML($('body')[0], function(){
		'width': 170
		doc.save(CV_Habib_Imron_Cahyo_Nugroho.pdf);
	});
}
