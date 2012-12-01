Ext.define('Sensor.view.Contact', {
 extend: 'Ext.navigation.View', 
	
config : {
	styleHTMLContent: true,
	layout: 'card',
	fullscreen: true,
	ui: 'dark',
	
	html:	'<p><h2>CONTACTGEGEVENS SENSOR</h2><br><strong>Bezoekadres</strong><br>Kapittelweg 33<br>Kamer A3.11<br><br><strong>Arnhem</strong><br>Ruitenberglaan 29<br>Kamer 3.19</p>' +
    			
    			// facebook share
				'<iframe src="http://www.facebook.com/plugins/like.php?href=http://www.facebook.com/SNSR.HAN&amp;' + 
				'layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light" ' +
				'scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden; height:20px; width:85px;"></iframe>' 
					
				// twitter share
				+ '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
  				'src="//platform.twitter.com/widgets/follow_button.html?screen_name=Snsr"' +
  				'style="width:300px; height:20px;"></iframe>',
	
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
        		xclass: 'Sensor.view.Photos',
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

