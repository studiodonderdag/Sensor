Ext.define('Sensor.view.Main', {
	extend: 'Ext.Container',
	requires: [ 'Ext.Carousel','Ext.DataView', 'Sensor.store.SensorStore', 'Ext.Img', 'Sensor.store.TwitterStore'],

	config: {
		fullscreen: true,
		maxWidth: 640,
		layout: 'fit',
		indicator: true,
    	scrollable: {
     		direction: 'vertical',
      		directionLock: true
    	},
    	layout: {
      		type: 'vbox',
      		align: 'stretch'
    	},		
		style: 'background-image: url(./resources/images/bg_papier.jpg)',	
		
		// Eerste container voor het Sensor en HAN logo
    	items: [
        		{
						xtype: 'container',
						flex: 1,
						styleHTMLContent: true,
						width: '100%',
        				height: 75,
						id: 'header',
        				items: [
        					{
        					xtype: 'image',
        					styleHTMLContent: true,
        					mode: 'image',
        					//mode: 'element',
        					src: './resources/images/logo_sensor.png',
        					baseCls: 'sensorLogo',
                    		title: 'Sensor Logo',
    						description: 'Sensor logo',
        					},
        					{
        					xtype: 'image',
        					styleHTMLContent: true,
        					mode: 'image',
        					src: './resources/images/logo_han.png',
        					baseCls: 'hanLogo',
                    		title: 'HAN Logo',
    						description: 'HAN logo',
        					},
        				]
        		},
        		// Eerste container met de Carousel
        		{
        				xtype: 'carousel',
        				flex: 2,
        				baseCls: 'carousel',		
                        height: 275,
                        width: '100%',
                        direction: 'horizontal',
                        directionLock: true,
                        items: [
                        	// Carousel item nieuws
                        	{
        					styleHTMLContent: true,
        					items: [
        					{
        						xtype: 'label',
        						baseCls: 'menuItemLabel',
        						html : 'Nieuws',
        						
        						listeners: {
        							element: 'element',
        							tap: function() {
    									Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    									Ext.Viewport.add({ xclass: 'Sensor.view.NewsList' });
       								}
        						},
        					},
        					{
        						xtype: 'image',
        						mode: 'image',
        						src: './resources/images/nieuws.jpg',
        						baseCls: 'menuItemLogo',
        						width: '100%',
        						height: '100%',
                    			title: 'Sensor Nieuws',
    							description: 'Sensor Nieuws',
    							
    							listeners: {
        							tap: function() {
    									Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    									Ext.Viewport.add({ xclass: 'Sensor.view.NewsList' });
       								}
        						},
        					}],
                    		},
							// Carousel item foto's           	
	        				{	        					        				
	        				items: [
        					{
        						xtype: 'label',
        						baseCls: 'menuItemLabel',
        						html : "Foto's",
        						
        						listeners: {
        							element: 'element',
        							tap: function() {
    									Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    									Ext.Viewport.add({ xclass: 'Sensor.view.Photos' });
       								}
        						},
        					},
        					{
        						xtype: 'image',
        						mode: 'image',
        						src: './resources/images/fotos.jpg',
        						baseCls: 'menuItemLogo',
        						width: '100%',
        						height: '100%',
                    			title: 'Sensor Fotos',
    							description: 'Sensor Fotos',
	        				        	    			
	        	    			listeners: {
        							tap: function() {
    									Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    									Ext.Viewport.add({ xclass: 'Sensor.view.Photos' });
       								}
        						}
        					}],
        					},
        					// Carousel item contact           	
	        				{	        					        				
	        				items: [
        					{
        						xtype: 'label',
        						baseCls: 'menuItemLabel',
        						html : "Contact",
        						
        						listeners: {
        							element: 'element',
        							tap: function() {
    									Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    									Ext.Viewport.add({ xclass: 'Sensor.view.Contact' });
       								}
        						},
        					},
        					{
        						xtype: 'image',
        						mode: 'image',
        						src: './resources/images/contact-header.jpg',
        						baseCls: 'menuItemLogo',
        						width: '100%',
        						height: '100%',
                    			title: 'Sensor Contact',
    							description: 'Sensor Contact',
	        				        	    			
	        	    			listeners: {
        							tap: function() {
    									Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    									Ext.Viewport.add({ xclass: 'Sensor.view.Contact' });
       									}
        						}
        					}],
        				},        					
        			]	
        		},
        		// Laatste container met Twitter feed
        		{
        			xtype: "dataview",
        			store: "TwitterStore",
					flex:3,
        			styleHTMLContent: true,
        			width: '100%',
        			height: 60,
					id: 'footer',
        			items: [
        				{
        					items: [
        						{
        							itemTpl: '{text}'
        						}]
				
        				}
        			]
        		}
    	]    	
	},

	    
});


