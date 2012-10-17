Ext.define("Sensor.model.SensorModel", {
extend: "Ext.data.Model",
config: {
	fields: [
   			'title', 'link', 'author', 'contentSnippet', 'content',
            {name: 'leaf', defaultValue: true}
            ],

} 

});
