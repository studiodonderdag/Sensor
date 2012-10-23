
Ext.application({
    name: 'Sensor',

//	controllers: ['Main'],    
    views: ['Main', 'News', 'Photos'],
	stores: ['SensorStore'],
	models: ['SensorModel'],	
    
    launch: function() { 
    	Ext.Viewport.add({
        	xclass: 'Sensor.view.Main'
    	});
    }
});