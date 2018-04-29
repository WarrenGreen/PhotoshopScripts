
var i;
for (i=0;i<app.documents.length; i++){
	app.activeDocument = app.documents[i];
	var nWidth = app.activeDocument.width;
	var nHeight = app.activeDocument.height;
	if (app.activeDocument.width >= app.activeDocument.height) {
		nWidth = app.activeDocument.width;
		nHeight = nWidth * 0.8;
	}else{
		nHeight = app.activeDocument.height;
		nWidth = nHeight * 0.8;
	}
	app.activeDocument.resizeCanvas(UnitValue(nWidth,"in"),UnitValue(nHeight,"in"),AnchorPosition.MIDDLECENTER);

}