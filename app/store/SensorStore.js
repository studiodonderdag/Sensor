Ext.define("Sensor.store.SensorStore", {
extend: 'Ext.data.Store',
requires: ["Ext.data.proxy.JsonP", "Sensor.model.SensorModel"  ],

config: {
    model: 'Sensor.model.SensorModel',
    autoLoad: true,
    proxy: {
        type: 'jsonp',
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=http://www.snsr.nl/sites/sensor/nieuws/index-rss-webapp.xml',
        reader: {
            type: 'json',
            rootProperty: 'responseData.feed.entries'
            }
        },
        
    // De load listener wordt gebruikt om aan ieder item in de SensorStore een articleRoot toe te voegen   
    listeners : {
		load: { fn: function(store, records, success) {
            /*console.log('store - ' + store +
                        ', typeof(store) - ' + typeof(store) +
                        ', records - ' + records +
                        ', records data - ' + records.data +
                        ', success - ' + success +
                        ', type of success - ' + typeof(success)+
                        ', success length - ' + success.length);
            if(records == true) {
                console.log('records is data property...');
            }
            if(store == true) {
                console.log('store is a data property...');
            }
            for(r in records) {
                console.log(r + '\ttypeof(r) -> ' + typeof(r));
            } */
			
            for(r in records) {
            	var articleLink = records[r].data.link;
            	records[r].data.articleRoot = articleLink.substring(0,(articleLink.lastIndexOf("/")));
            	}
			},
			scope: this 
		}    	
    },    
        
    }   
});
