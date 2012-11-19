Ext.define('Sensor.view.Contact', {
    extend: 'Ext.Container',

    config: {
    	fullscreen: true,
    	
    	items: [
    			{
    				html: '<p><h2>CONTACTGEGEVENS SENSOR</h2><br><strong>Bezoekadres</strong><br>Kapittelweg 33<br>Kamer A3.11<br><br><strong>Arnhem</strong><br>Ruitenberglaan 29<br>Kamer 3.19</p>',
        
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