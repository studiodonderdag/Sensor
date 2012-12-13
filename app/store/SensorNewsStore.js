Ext.define("Sensor.store.SensorNewsStore", {
extend: 'Ext.data.Store',
requires: ["Ext.data.proxy.JsonP", "Sensor.model.SensorNewsModel"  ],

config: {
    model: 'Sensor.model.SensorNewsModel',
    autoLoad: true,
    
    proxy: {
        type: 'jsonp',
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=http://www.snsr.nl/sites/sensor/nieuws/index-rss-webapp.xml',
        reader: {
            type: 'json',
            rootProperty: 'responseData.feed.entries'
            }
        },        
    }   
});
