
Ext.application({
    name: 'Sensor',

//	controllers: ['Main'],    
    views: ['Main', 'NewsList', 'Photos'],
	stores: ['SensorStore', 'TwitterStore'],
	models: ['SensorModel', 'TwitterModel'],	
    
    launch: function() { 
    	Ext.Viewport.add({
        	xclass: 'Sensor.view.Main'
    	});
    }
});