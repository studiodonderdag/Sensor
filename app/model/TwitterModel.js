// Put a href tags around the http link
function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '" target="_new">' + url + '</a>';
    })
}

Ext.define("Sensor.model.TwitterModel", {
extend: "Ext.data.Model",
config: {
    fields: ['id', 'text', 'from_user', 'profile_image_url',
    		 {
			 	name: 'htmlText',
			 	type: 'string',
			 	convert: function (value, record) {
			 		var htmlText = urlify( record.get('text') );
                	return htmlText;
			 	}			 	
			 }
    		]
 } 
});
