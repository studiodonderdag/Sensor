
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
                    
                    title: 'Orion Nebula',
    				description: 'The Orion Nebula is rather pretty',

    				src: 'http://apod.nasa.gov/apod/image/1202/oriondeep_andreo_960.jpg',
   				 

                    
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
	        	    
	        	    
	        	    
        		}
    	]    	
	},

	
	initialize: function() {
    	this.callParent(arguments);
		this.element.on('tap', this.onTap, this);
    },
    
    onTap: function() {
        console.log('tab');	
        
        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        
    	Ext.Viewport.add({
        	xclass: 'Sensor.view.News'
    	});
    }    
    
});


