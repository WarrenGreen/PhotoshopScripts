var i;
layers = app.activeDocument.layers;


for(i=0; i<layers.length; i++) {
	layers[i].blendMode = BlendMode.LIGHTEN;
}