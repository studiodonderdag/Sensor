Ext.define('Sensor.view.Main', {
 extend: 'Ext.Container',
 stores : ['SensorStore'],
	
 config: {
	style: 'background-image: url(./resources/images/bg_papier.jpg)',	
	layout: {
		type: 'vbox',
		scrollable: true,
		fullscreen: true,
		styleHtmlContent : true,
	},
		
	items: [
	{	// top container in vbox for logo
		xtype: 'container',		
		flex: 1,
		id: 'header',
		items: [
			{
				xtype: 'image',
        		mode: 'image',
        		src: './resources/images/logo_sensor.png',
        		baseCls: 'sensorLogo',
			},
			{
				xtype: 'image',
				mode: 'image',
				src: './resources/images/logo_han.png',
				baseCls: 'hanLogo',
			},
        ]
	},
	{	// center container in vbox for carousel
		xtype: 'carousel',
		flex:3,
		activeItem: 0,	// start at first item in carousel
		indicator: true, // carousel navigation indicators 
		defaults: {
			styleHtmlContent : true,
			// add label to every carousel item
			xtype: 'label',
        	baseCls: 'menuItemLabel',
        	// add image to every carousel item
        	xtype: 'image',
        	mode: 'image',        		
        	baseCls: 'menuItemLogo',
        	width: '100%',
        	height: '80%',
        	listeners: {
        		tap: function() {
    				Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				Ext.Viewport.add({ xclass: 'Sensor.view.' + this.id });
       			},
        	},
		},
		// carousel items
	    items: [
	    {
				id : 'NewsList', // this needs to be the name of the view xtype
				html : 'Nieuws',
				src: './resources/images/nieuws.jpg',

				// Deze load listener laadt het laatste plaatje uit de RSS SensorStore
				// De default listeren wordt overschreven en dus wekt het tab event dan niet meer.
				// Even uitzoeken hoe je een listener toevoegd.
//				listeners : {
//					load: function () {
//						var store = Ext.data.StoreManager.lookup('SensorStore');						
//						var image = store.first().data.articleRoot + '/more.jpg';
//						console.log( image );
//					},
//				},			
				

	    },	
    		{
    			id : 'Photos',
    			html: 'photos',
    			src: './resources/images/fotos.jpg',
    		},
    		{
    			id : 'Contact',
    			html: 'contact',
    			src: './resources/images/contact-header.jpg',
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
        
		style: 'border: 1px solid red; display: block;' + 
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


