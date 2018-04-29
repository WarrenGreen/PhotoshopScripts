var printing_ratio = 8/10;
var i;
for (i=0;i<app.documents.length; i++){
	app.activeDocument = app.documents[i];
	var nWidth = app.activeDocument.width;
	var nHeight = app.activeDocument.height;
	if (app.activeDocument.width >= app.activeDocument.height) {
		nWidth = app.activeDocument.width;
		nHeight = nWidth * printing_ratio;
	}else{
		nHeight = app.activeDocument.height;
		nWidth = nHeight * printing_ratio;
	}
	app.activeDocument.resizeCanvas(UnitValue(nWidth,"in"),UnitValue(nHeight,"in"),AnchorPosition.MIDDLECENTER);

}