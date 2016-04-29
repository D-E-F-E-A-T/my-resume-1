function printToPdf() {
	var doc = new jsPDF();
	
	var specialElementHandlers = {
	'.btn-dark': function(element, renderer){
		return true;
	}
	};

	doc.fromHTML($('body').get(0), 15, 15, {
		'width': 170,
		'elementHandlers': specialElementHandlers
	});
}
