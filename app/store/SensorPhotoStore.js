Ext.define("Sensor.store.SensorPhotoStore", {
extend: 'Ext.data.Store',
requires: ["Ext.data.proxy.JsonP", "Sensor.model.SensorPhotoModel"  ],

config: {
    model: 'Sensor.model.SensorPhotoModel',
    autoLoad: true,
    
    proxy: {
        type: 'jsonp',
            url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&q=http://redactie.snsr.nl/sites/sensor/fotos/index-rss.xml',
            //url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=http://redactie.snsr.nl/sites/sensor/fotos/index-rss.xml?v6',
        reader: {
            type: 'json',
            rootProperty: 'responseData.feed.entries'
            }
        },        
    }   
});
