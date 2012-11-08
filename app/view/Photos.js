Ext.define("Sensor.view.Photos", {
    extend: 'Ext.Panel',

    config: {
    	fullscreen: true,
    	
    	items: [
    			{
    				html: 'Foto album',
        
    			},
    
    			{
        			xtype: 'button',
     				text: 'Hoofdmenu',
     				ui: 'back',
     				docked: 'bottom',
     				     				
     				listeners: {
        				tap: function() {
    						Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    						Ext.Viewport.add({ xclass: 'Sensor.view.Main' });
       					}
        			}
    			}
    		   ]
    }
});
