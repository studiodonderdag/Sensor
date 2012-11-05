Ext.define('Sensor.view.Main', {
	extend: 'Ext.Container',
	requires: [ 'Ext.Carousel', 'Sensor.store.SensorStore', 'Ext.Img'],

	config: {
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
						width: 600,
        				height: 110,
						id: 'header',
        				items: [
        					{
        					xtype: 'image',
        					styleHTMLContent: true,
        					src: './resources/images/logo_sensor.png',
        					baseCls: 'sensorlogo',
        					width: 285,
        					height: 104,
                    		title: 'Sensor Logo',
    						description: 'Sensor logo',
        					}
        				]
        		},
        		{
						
        				xtype: 'carousel',
        				flex: 2,
        				baseCls: 'carousel',
        				
                        height: 300,
                        width: 600,
                        direction: 'horizontal',
                        directionLock: true,
                        items: [
                        	{
        					styleHTMLContent: true,
        					items: [
        					{
        						xtype: 'label',
        						id: 'menuItemLabel',
        						baseCls: 'menuItemLabel',
        						html : 'Nieuws', 
        					},
        					{
        						xtype: 'image',
        						src: './resources/images/nieuws.jpg',
        						baseCls: 'menuItemLogo',
        						width: 513,
                    			title: 'Sensor Nieuws',
    							description: 'Sensor Nieuws',
    							listeners: {
        							tap: function() {
            						console.log('News');
        	        
    								Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    								Ext.Viewport.add({
    									xclass: 'Sensor.view.News'
    									});
       								}
        						},
        					}
        					],

                    	},
           	
	        			{
	        				
	        				
	        				items: [
        					{
        						xtype: 'label',
        						id: 'menuItemLabel',
        						baseCls: 'menuItemLabel',
        						html : 'Fotos', 
        					},
        					{
        						xtype: 'image',
        						src: './resources/images/nieuws.jpg',
        						baseCls: 'menuItemLogo',
        						width: 513,
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
						width: 600,
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

	
	/*initialize: function() {
   // 	this.callParent(arguments);
    	
		//this.element.on('tap', this.onTap, this);
		this.innerElement.on('tap', this.onTap, this);
    },
    
    onTap: function() {
        console.log('tab');
        console.log(this.getActiveIndex());
        // Index 0 is page1 of the Carousel --> News.js
        if (this.getActiveIndex() == 0) {
        	        
        	Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    		Ext.Viewport.add({
        	xclass: 'Sensor.view.News'
    		});
    	}
    	// Index 1 is page2 of the Carousel --> Photos.js
    	if (this.getActiveIndex() == 1) {
        	        
        	Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    		Ext.Viewport.add({
        	xclass: 'Sensor.view.Photos'
    		});
    	}
    } */   
    
});


