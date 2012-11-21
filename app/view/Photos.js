Ext.define('Sensor.view.Photos', {
 extend: 'Ext.navigation.View', 
 xtype: 'photos',  // name reference
	
config : {
	styleHTMLContent: true,
	layout: 'card',
	fullscreen: true,
	ui: 'dark',
	
    navigationBar: {
	    docked: 'bottom',
	    defaults : {
	    	align: 'right',
	    	xtype: 'button',
	    	iconMask: true,
        	ui: 'neutral', // dark / active / light / neutral        	
	    },
	    items: [
        	{
        		xclass: 'Sensor.view.NewsList',
        		title: 'Home',
        		iconCls: 'home',
            	listeners: {
         			tap :  function getTabBarItem(obj) {	
						Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    					Ext.Viewport.add({ xclass: 'Sensor.view.Main' });
					}     
	            } // listeners
            },
        ]
	}, // navigationbar
    
} //config    
});
