Ext.define("Sensor.model.SensorModel", {
 extend: "Ext.data.Model",
 config: {
	fields: [
			 'title', 'link', 'author', 'contentSnippet', 'content',
			 {
			 	name: 'articleRoot',
			 	type: 'string',
			 	convert: function (value, record) {
                    var articleLink = record.get('link');
                	var articleRoot = articleLink.substring(0,(articleLink.lastIndexOf("/")));
                	return articleRoot;
			 	}			 	
			 }	
            ]
 },

});
