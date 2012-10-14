


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
    	    	    
            		items: {
                	   xtype: 'toolbar',
                	   docked: 'top',
                	   style: 'border: none; font: 15px Arial black',
                	   height: 50,
 		               title: 'title',
 		               items: [
 		               		{text: 'Back', ui: 'back'},
 		               		{text: 'Action', ui: 'action'},
 		               		{text: 'Normal', ui: 'normal'},
 		               		{text: 'Round', ui: 'round'},
 		               ]
            		},
            		// define list item
            		xtype: 'list',
            		// fill store (array) with values
            		store: {
                		fields: ['name'],
                		data: [
                       	  {name: 'Jeroen'},
                  		  {name: 'Sietze'},
                  		  {name: 'Peter'},
              		    ]
    	    		},
    	    		// place list
    	    		itemTpl: '{name}'
    	    	    
        		},
	        	{
	        		id: 'page2',
        			xtype: 'panel',
        			// Images on multiple devices with Sencha.io Src - add http://src.sencha.io/
        			// Specifying sizes with Sencha.io Src - add http://src.sencha.io/320/200/
        	    	html : 'Fotos<br /><img src="http://src.sencha.io/320/200/http://pierre.chachatelier.fr/programmation/images/mozodojo-original-image.jpg">',
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


