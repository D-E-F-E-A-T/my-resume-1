function printToPdf() {
	var doc = new jsPDF('p', 'pt', 'letter');
	doc.addHTML($('body')[0], function(){
		doc.save(CV_Habib_Imron_Cahyo_Nugroho.pdf);
	});
}
