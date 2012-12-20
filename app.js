
//Ext.Loader.setConfig({disableCaching: false});

Ext.application({
    name: 'Sensor',

    icon: 'resources/icons/Icon@2x.png',
    glossOnIcon: true,
    
	startupImage: {
		'320x460': 'resources/loading/320x460.png',
	   	'640x920': 'resources/loading/640x920.png',
   		'768x1004': 'resources/loading/768x1004.png',
   		'748x1024': 'resources/loading/748x1024.png',
   		'1496x2048': 'resources/loading/1496x2048.png'
	},    
    
    fullscreen: true,
    views: ['Main', 'NewsList', 'Photos', 'Contact' ],
	stores: ['SensorNewsStore', 'SensorPhotoStore', 'TwitterStore'],
	models: ['SensorNewsModel', 'SensorPhotoModel', 'TwitterModel'],	
    
    launch: function() { 
    	Ext.Viewport.add({
        	xclass: 'Sensor.view.Main'
    	});
    }
});