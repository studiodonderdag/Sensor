Ext.define('Sensor.view.Main', {
 extend: 'Ext.Container',
 stores : ['SensorStore'],	
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
		height: 60,
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

		// carousel items
	    items: [
	    {
				id : 'NewsList', // this needs to be the name of the view xtype	
				cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/nieuws.jpg");',
    			html: '<div class="menuItemLabel">Nieuws</div>',
				listeners : {				
				 tap: {
        			fn : function() {
    				 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				 Ext.Viewport.add({ xclass: 'Sensor.view.NewsList' });
        			},
        			element : 'element',
					scope: this,
       			 },	      			 
				}, // listener			
	    }, // newslist item	
    	{
    			id : 'Photos',
    			cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/fotos.jpg");',
    			html: '<div class="menuItemLabel">Foto\'s</div>',
				listeners : {				
				 tap: {
        			fn : function() {
    				 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				 Ext.Viewport.add({ xclass: 'Sensor.view.Photos' });
        			},
        			element : 'element',
					scope: this,
       			 }
				}
    	},
    	{
    			id : 'Contact',
    			cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/contact-header.jpg");',
    			html: '<div class="menuItemLabel">Contact</div>',
				listeners : {				
				 tap: {
        			fn : function() {
    				 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				 Ext.Viewport.add({ xclass: 'Sensor.view.Contact' });
        			},
        			element : 'element',
					scope: this,
       			 }
				}

    	}    	
    	] // carousel items
	},
	{	// bottom container in vbox for lasttweet
        xtype: "dataview",	
//[WARN][Ext.dataview.DataView] Attempting to create a DataView with a layout. DataViews do not have a layout configuration as their items are laid out automatically. 
//
//        layout : {
//        	type: 'vbox',
//        	align: 'center',
//        	pack: 'center',
//        },
		style: 'border: none; display: block;' + 
				'text-align: center; font-size: 12px; font-style:italic',
        scrollable: false,
        store: "TwitterStore",
        height: 40,
        items: [ { itemTpl: '{text}' } ],
    },
	] 
} // config
});


