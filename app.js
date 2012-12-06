
//Ext.Loader.setConfig({disableCaching: false});

Ext.application({
    name: 'Sensor',

    icon: 'resources/icons/Icon@2x.png',
    glossOnIcon: true,
    
	startupImage: {
		'320x460': 'resources/startup/320x460.png',
	   	'640x920': 'resources/startup/640x920.png',
   		'768x1004': 'resources/startup/768x1004.png',
   		'748x1024': 'resources/startup/748x1024.png',
   		'1536x2008': 'resources/startup/1536x2008.png',
   		'1496x2048': 'resources/startup/1496x2048.png'
	},    
    
    fullscreen: true,
    views: ['Main', 'NewsList', 'Photos', 'Contact' ],
	stores: ['SensorStore', 'TwitterStore'],
	models: ['SensorModel', 'TwitterModel'],	
    
    launch: function() { 
    	Ext.Viewport.add({
        	xclass: 'Sensor.view.Main'
    	});
    }
});