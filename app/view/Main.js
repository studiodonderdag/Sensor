
Ext.define('Sensor.view.Main', {
	extend: 'Ext.Carousel',
	requires: [ 'Ext.TabPanel', 'Sensor.store.SensorStore', 'Ext.Img'],
	
	xtype: 'mainview',
	config: {
		id: 'carousel',
		fullscreen: true,
		indicator: true,
		
    	items: [
        		{
        			id: 'page1',
        			xtype: 'img',
                    html : 'Nieuws',
                    title: 'Orion Nebula',
    				description: 'The Orion Nebula is rather pretty',
					src: './resources/images/bg_papier.jpg',
                    
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
                    
                    
                   
/*                    
// We moeten op een manier de XML/HTML binnenhalen van het echte artikel
// In de RSS feed zit niet het complete artikel
// Met de webpagina op een ander domein van snsr.nl krijg je de melding: Access-Control-Allow-Origin
// Even uitzoeken wat de opties zijn                        	
var myRequest = Ext.Ajax.request({
	extend: 'Ext.data.proxy.Ajax',
    url: post.get('link'),
	method:'post',
    useDefaultXhrHeader: false,
    failure: function(response) {
        console.log(response.aborted); // logs true
    }
});
*/                        	
                        	
                        	
	        	{
	        		id: 'page2',
        			xtype: 'img',
        			// Images on multiple devices with Sencha.io Src - add http://src.sencha.io/
        	    	html : 'Fotos<br /><img src="http://src.sencha.io/http://pierre.chachatelier.fr/programmation/images/mozodojo-original-image.jpg">',
	        	    style: 'background-color: #5E99CC',
	        	    
	        	    	listeners: {
        					tap: function() {
            				console.log('Foto');
        	        
    						Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    						Ext.Viewport.add({
    							xclass: 'Sensor.view.Photos'
    							});
       						}
        				}
	        	    
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


