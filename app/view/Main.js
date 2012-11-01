Ext.define('Sensor.view.Main', {
	extend: 'Ext.Panel',
	requires: [ 'Ext.Carousel', 'Sensor.store.SensorStore', 'Ext.Img'],

	config: {
		//id: 'carousel',
		fullscreen: true,
		indicator: true,
		
		style: 'background-image: url(./resources/images/bg_papier.jpg)',
		
    	items: [
        		{
        			xtype: 'carousel',
        				
                        height: 200,
                        html: 'hallo',
                        items: [
                        	{
                        	id: 'page1',
        					xtype: 'img',
                   			html : 'Nieuws',
                    		title: 'Orion Nebula',
    						description: 'The Orion Nebula is rather pretty',
							src: './resources/images/logo_sensor.png',
                    
    							listeners: {
        							tap: function() {
            						console.log('News');
        	        
    								Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    								Ext.Viewport.add({
    									xclass: 'Sensor.view.News'
    									});
       							}
        					}
                    	},
           	
	        			{
	        				id: 'page2',
        					xtype: 'img',
        					// Images on multiple devices with Sencha.io Src - add http://src.sencha.io/
        	    			html : 'Fotos<br /><img src="http://src.sencha.io/http://pierre.chachatelier.fr/programmation/images/mozodojo-original-image.jpg">',
	        	   			//style: 'background-color: #5E99CC',
	        	    
	        	    			listeners: {
        							tap: function() {
            						console.log('Foto');
        	        
    								Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    								Ext.Viewport.add({
    								xclass: 'Sensor.view.Photos'
    									});
       							}
        					}
        				}]
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


