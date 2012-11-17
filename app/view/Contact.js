Ext.define("Sensor.view.Contact", {
    extend: 'Ext.Panel',

    config: {
    	fullscreen: true,
    	
    	items: [
    			{
    				html: 'Contact Info',
        
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