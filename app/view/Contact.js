Ext.define('Sensor.view.Contact', {
	extend: 'Ext.Container',
	
	config: {
			style: 'background-image: url(./resources/images/bg_papier.jpg)',
			id: 'mainmenu',
			layout: {
				type: 'vbox',
				scrollable: true,
				fullscreen: true,
				styleHtmlContent : true,
			},		
   
    items: [
         {
        	 height: 80,
     		 id: 'header',
     		 items: [
     		 	{   xtype: 'image', mode: 'image', src: './resources/images/logo_sensor.png', baseCls: 'sensorLogo', },
     		 	{   xtype: 'image', mode: 'image', src: './resources/images/logo_han.png', baseCls: 'hanLogo', },
             ]
         },
         {
        	 xtype: 'panel',
        	 flex:1,
             items: [
                  {                     
                     html:	'<img src="./resources/images/contact-header.jpg" alt="Contact" height="auto" width="100%">' +	
                    	 	
                    	 	'<div id="contact-info-header"><p><h2>Contactgegvens</h2></p></div>' +
                    	 	
                    	 	'<br>' +
                    	 	
                    	 	'<div id="contact-info-left"><p>Nijmegen<br>Kapittelweg 33<br>Kamer A3.11<br><br>Postbus 6960<br>6503 GL Nijmegen<br>T. (024) 353 03 90<br>E. sensor@han.nl</p></div>' +
                    	 	
                    	 	'<div id="contact-info-right"><p>Arnhem<br>Ruitenberglaan 29<br>Kamer 3.19<br><br>Adverteren ?<br>Bureau Nassau<br>T. (020) 623 09 05<br>bureaunassau.nl</p></div>' +
 			
                     // facebook share
                     '<div id="contact-social"><iframe src="http://www.facebook.com/plugins/like.php?href=http://www.facebook.com/SNSR.HAN&amp;' + 
                     'layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light" ' +
                     'scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden; height:20px; width:85px;"></iframe>' 
					
                     // twitter share
                     + '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
                     'src="//platform.twitter.com/widgets/follow_button.html?screen_name=Snsr"' +
                     'style="width:300px; height:20px;"></iframe></div>',
                  }
              ]
         },
         
         {
             docked: 'bottom',
             
             xtype: 'titlebar',
             items: [
                  {
                	  align: 'right',
                	  xtype: 'button',
                	  iconMask: true,
                	  ui: 'neutral', // dark / active / light / neutral
                	  title: 'Home',
                	  iconCls: 'home',
                	  	listeners: {
                	  		tap :  function getTabBarItem(obj) {	
                	  			Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
                	  			Ext.Viewport.add({ xclass: 'Sensor.view.Main' });
                	  		}     
                	  	} // listeners
                 }
             ]
         },
     ]
	 }
});