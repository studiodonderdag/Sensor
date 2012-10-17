Ext.define("Sensor.store.SensorStore", {
extend: "Ext.data.TreeStore",
requires: ["Ext.data.proxy.JsonP", "Ext.dataview.List", "Sensor.model.SensorModel"  ],

config: {
    model: "Sensor.model.SensorModel",            
	root: { leaf: false },
    proxy: {
        type: 'jsonp',
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=http://www.snsr.nl/sites/sensor/nieuws/index-rss.xml',
        reader: {
            type: 'json',
            rootProperty: 'responseData.feed.entries'
            }
        }
                
    }    
});
