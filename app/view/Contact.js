Ext.define('Sensor.view.Contact', {
    extend: 'Ext.Container',

    config: {
    	fullscreen: true,
    	styleHtmlContent: true,
    	
    	items: [
    			{
    				html: '<p><h2>CONTACTGEGEVENS SENSOR</h2><br><strong>Bezoekadres</strong><br>Kapittelweg 33<br>Kamer A3.11<br><br><strong>Arnhem</strong><br>Ruitenberglaan 29<br>Kamer 3.19</p>' +
    						'<iframe src="//www.facebook.com/plugins/like.php?href=http://www.facebook.com/SNSR.HAN&amp;send=false&amp;layout=standard&amp;width=450&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=35&amp;appId=185289514852980" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:35px;" allowTransparency="true"></iframe>' +
    						'<br><iframe src="http://www.motogp.com/en/ajax/social_links_iframe/twitter?href=http://www.facebook.com/SNSR.HAN&amp;" scrolling="no" frameborder="0" allowtransparency="true"></iframe>',
        			
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