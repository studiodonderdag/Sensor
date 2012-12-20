

Ext.define("Sensor.model.SensorPhotoModel", {
 extend: "Ext.data.Model",
 config: {
	fields: [
			 'title', 'link', 'author', 'contentSnippet', 'content',
			 {
			 	name: 'articleImage',
			 	type: 'string',
			 	convert: function (value, record) {			 					 		
			 		content = record.get('content');
			 		// filter content van <img tot >
			 		tagStart = content.indexOf('<img');
			 		tagEnd = content.indexOf('>') + 1;
			 		imageTag = content.substring(tagStart, tagEnd);
			 		// filter de image url uit de source van src= tot ">
			 		srcStart = imageTag.indexOf('src="') + 5;
			 		srcEnd = imageTag.indexOf('">');			 		
			 		imageSrc = imageTag.substring(srcStart, srcEnd);			 		
			 		return imageSrc;
			 	}			 	
			 }	
            ]
 },

});
