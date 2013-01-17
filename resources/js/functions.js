
// function is used to put a loading mask on a Object where a background image is loaded.
// Usage: maskImageLoad( ObjId, imageURL )
var maskImageLoad = function( objId, imageURL ) {
	 			var obj = Ext.getCmp(objId);
	 			// set loading mask
				obj.setMasked({xtype:'loadmask',message:'Loading Image'});
				img = new Image();
				img.src = imageURL;
				img.onload = function() {
					// remove loading mask
					obj.setMasked(false);
					// set new image as background image
					obj.setStyle( { backgroundImage : 'url('+ imageURL  +')' } );
				};
};