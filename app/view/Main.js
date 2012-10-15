


Ext.define('Sensor.view.Main', {
	extend: 'Ext.Carousel',
	requires: 'Ext.Carousel',
	xtype: 'mainview',
	config: {
		id: 'carousel',
		fullscreen: true,
		indicator: true,
    	xtype:'carousel',
    	items: [
        		{
        			id: 'page1',
	        	    html : 'Nieuws Pagina',
    	    	    style: 'background-color: #759E60',
    	    	    // define list components
            		xtype: 'list',
            		// fill list with values with values from SensorStore (array) 
            		store: 'SensorStore',
					// add list compent
   	    			itemTpl: '{name}',    	    			
    	    		// add select listener to each item 
    	    		listeners: {
        				select: function(view, record) {
            			console.log('Geselecteerd: ' + record.get('name'));
            			//Ext.Msg.alert('Geselecteerd!', 'Je hebt geselecteerd ' + record.get('name'));
        				}
    				}
    	    	    
        		},
	        	{
	        		id: 'page2',
        			xtype: 'panel',
        			// Images on multiple devices with Sencha.io Src - add http://src.sencha.io/
        	    	html : 'Fotos<br /><img src="http://src.sencha.io/http://pierre.chachatelier.fr/programmation/images/mozodojo-original-image.jpg">',
	        	    style: 'background-color: #5E99CC',
	        	    
        		}
    	]    	
	},

	
	initialize: function() {
        // Do something
		console.log('Initialization debugging info');	
		this.callParent();
    }
    
    
});


