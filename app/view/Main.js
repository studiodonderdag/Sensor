Ext.define('Sensor.view.Main', {
	extend: 'Ext.Container',
	requires: [ 'Ext.Carousel', 'Sensor.store.SensorStore', 'Ext.Img'],

	config: {
		width: function(){Ext.viewport.getWindowHeight( );},
		height: function(){Ext.viewport.getWindowHeight( );},
		fullscreen: true,
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
		
    	items: [
        		{
						xtype: 'container',
						flex: 1,
						styleHTMLContent: true,
						//width: 600,
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
        					//width: 285,
        					//height: 104,
                    		title: 'Sensor Logo',
    						description: 'Sensor logo',
        					},
        					{
        					xtype: 'image',
        					styleHTMLContent: true,
        					mode: 'image',
        					src: './resources/images/logo_han.png',
        					baseCls: 'hanLogo',
        					//width: 102,
        					//height: 70,
                    		title: 'HAN Logo',
    						description: 'HAN logo',
        					},
        				]
        		},
        		{
						
        				xtype: 'carousel',
        				flex: 2,
        				baseCls: 'carousel',
        				
                        height: 275,
                        width: '100%',
                        //width: 600,
                        direction: 'horizontal',
                        directionLock: true,
                        items: [
                        	{
        					styleHTMLContent: true,
        					items: [
        					{
        						xtype: 'label',
        						baseCls: 'menuItemLabel',
        						html : 'Nieuws', 
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
    									Ext.Viewport.add({ xclass: 'Sensor.view.News' });
       								}
        						},
        					}
        					],

                    	},
           	
	        			{
	        				
	        				
	        				items: [
        					{
        						xtype: 'label',
        						baseCls: 'menuItemLabel',
        						html : 'Fotos', 
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
        				}]
        		},
        		{
        				xtype: 'container',
        				flex:3,
        				styleHTMLContent: true,        				
						//width: 600,
        				width: '100%',
        				height: 30,
						id: 'footer',
        				items: [
        					{
        					html : 'Twitter',        					
        					}
        				]
        		}
    	]    	
	},

	    
});


