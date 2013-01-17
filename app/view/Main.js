Ext.define('Sensor.view.Main', {
 extend: 'Ext.Container',
 config: {
	style: 'background-image: url(./resources/images/bg_papier.jpg)',
	id: 'mainmenu',
	layout: {
		type: 'vbox',
		scrollable: true,
		fullscreen: true,
		styleHtmlContent : true,
	},		
	items: [
	{	// top container in vbox for logo		
		height: 80,
		id: 'header',
		items: [
			{   xtype: 'image', mode: 'image', src: './resources/images/logo_sensor.png', baseCls: 'sensorLogo', },
			{   xtype: 'image', mode: 'image', src: './resources/images/logo_han.png', baseCls: 'hanLogo', },
        ]
	},
	{	// center container in vbox for carousel
		xtype: 'carousel',
		id: 'carousel',
		flex:1,
		activeItem: 0,	// start at first item in carousel
		indicator: true, // carousel navigation indicators
		// listener voor carousel
		listeners : {
		 initialize: {
		 	fn: function() {
			// Set NewsList background Image
		 	Ext.getStore('SensorNewsStore').load(function(articles) {
		 		maskImageLoad( 'NewsList', articles[0].data.articleRoot + '/more.jpg' );		 		
		 	});		 		
			// Set Photos background Image
		 	Ext.getStore('SensorPhotoStore').load(function(albums) {
		 		maskImageLoad( 'Photos', albums[0].data.articleImage );
		 	});
		 		
		 	} // function
		 } // initialize
		}, // listeners
		// default listeners voor alle carousel items		
		defaults: {
			listeners : {
				 tap: {
        			fn : function() {
    				 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				 Ext.Viewport.add({ xclass: 'Sensor.view.' + this.id });
        			},
        			element : 'element',
       			 }	      			 
			} // listener						
		},
		
		// carousel items
	    items: [
	    {
				id : 'NewsList', // this needs to be the name of the view xtype	
				cls: 'menuItemBackground',
    			html: '<div class="menuItemLabel">Nieuws</div>',
	    },	
    	{
    			id : 'Photos',
    			cls: 'menuItemBackground',
    			html: '<div class="menuItemLabel">Foto\'s</div>',
    	},
    	{
    			id : 'Contact',
    			cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/contact-header.jpg");',
    			html: '<div class="menuItemLabel">Contact</div>',
    	}    	
    	] // carousel items
	},
	{	// bottom container in vbox for lasttweet
		xtype: "dataview",
//      disableSelection: true,
      
		style: 'border: none; display: block;' + 
				'text-align: center; font-size: 12px; font-style:italic',
        scrollable: false,        
        store: "TwitterStore",
        height: 40,                
        itemTpl: '{text}',
    },
	] 
} // config
});


