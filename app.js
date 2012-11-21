
Ext.application({
    name: 'Sensor',
   
    views: ['Main', 'NewsList', 'Photos', 'Contact' ],
	stores: ['SensorStore', 'TwitterStore'],
	models: ['SensorModel', 'TwitterModel'],	
    
    launch: function() { 
    	Ext.Viewport.add({
        	xclass: 'Sensor.view.Main'
    	});
    }
});