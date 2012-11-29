Ext.define('Sensor.view.Contact', {
 extend: 'Ext.Container', 
	
 config : {
 	fullscreen: true,
	styleHTMLContent: true,
	layout: 'fit',
	
	items : [
	 {
    	html:	'<p><h2>CONTACTGEGEVENS SENSOR</h2><br><strong>Bezoekadres</strong><br>Kapittelweg 33<br>Kamer A3.11<br><br><strong>Arnhem</strong><br>Ruitenberglaan 29<br>Kamer 3.19</p>' +
    			
    			// facebook share
				'<iframe src="http://www.facebook.com/plugins/like.php?href=http://www.facebook.com/SNSR.HAN&amp;' + 
				'layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light" ' +
				'scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden; height:20px; width:85px;"></iframe>' 
					
				// twitter share
				+ '<iframe allowtransparency="true" frameborder="0" scrolling="no"' +
  				'src="//platform.twitter.com/widgets/follow_button.html?screen_name=Snsr"' +
  				'style="width:300px; height:20px;"></iframe>'
					
	 }
	]

 }
		

});