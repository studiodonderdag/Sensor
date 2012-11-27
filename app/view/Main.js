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
		xtype: 'container',		
		height: 60,
		id: 'header',
		items: [
			{
				xtype: 'image', mode: 'image',
        		src: './resources/images/logo_sensor.png', baseCls: 'sensorLogo',
			},
			{
				xtype: 'image', mode: 'image',
				src: './resources/images/logo_han.png', baseCls: 'hanLogo',
			},
        ]
	},
	{	// center container in vbox for carousel
		xtype: 'carousel',
		id: 'carousel',
		flex:1,
		activeItem: 0,	// start at first item in carousel
		indicator: true, // carousel navigation indicators
		defaults: {
			styleHtmlContent : true,
		},
		// carousel items
	    items: [
	    {
				id : 'NewsList', // this needs to be the name of the view xtype				
				html: '<div class="wrapper"><div class="menuItemBackground"' + 
				'style="background-image:url(\'./resources/images/nieuws.jpg\');">' +
				'<div class="menuItemLabel">Nieuws</div></div></div>',
				flex:1,
				listeners : {				
				 tap: {
        			fn : function() {
    				 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				 Ext.Viewport.add({ xclass: 'Sensor.view.NewsList' });
        			},
        			element : 'element',
					scope: this,
       			 },	      			 
			     painted: {
			     	fn: function() {    		
		var store = Ext.data.StoreManager.lookup('SensorStore');
		store.load();
		console.log( store.data );
//		store.each(function(rec){console.log(rec);});
//							var image = store.first().data.articleRoot + '/more.jpg';
//							var image = store.getAt(0);
//			     			image.get('articleRoot');
//						console.log( store.self.getName() );
//			     		console.log( store );
//						console.log( image.get('articleRoot') );
			     	},
//			     	single: true,
//        			element : 'element',
//					scope: 'NewsList',			     	
        		 },
				}, // listener			
	    }, // newslist item	
    		{
    			id : 'Photos',
    			html: '<div class="wrapper"><div class="menuItemBackground"' + 
				'style="background-image:url(\'./resources/images/fotos.jpg\');">' +
				'<div class="menuItemLabel">Foto\'s</div></div></div>',
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
    			html: '<div class="wrapper"><div class="menuItemBackground"' + 
				'style="background-image:url(\'./resources/images/contact-header.jpg\');">' +
				'<div class="menuItemLabel">Contact</div></div></div>',
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
        //centered: true,
        //autoScroll: true,
        store: "TwitterStore",
        height: 80,
        items: [ { itemTpl: '{text}' } ],
    },
	] 
} // config
});


