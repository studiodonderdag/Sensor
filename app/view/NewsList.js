
var getContent = function(view, index, item, e) {
 				var rec = view.getStore().getAt(index);
	 			var articleRoot = rec.data.articleRoot;
	 			// het eerste plaatje van een artikel heet altijd more.jpg
	 			// deze staat in de root van de index.xml van het artikel 
	  			var imageLink = articleRoot + "/more.jpg";
	 			var imageLink = '<img src="' + imageLink + '" class="articleTopImage"</img>';
	 			var content = rec.data.content;
				// de images in het artikel gebruiken relatieve paden
	 			// voor iedere img src moet het complete pad toegevoegd worden
	 			content=content.replace(/src="/g, "class=\"articleImage\" src=\""+articleRoot+"/");
	 			var content = imageLink + content;
				Ext.ComponentManager.get('navigationviewid').push({ 
					scrollable: 'vertical',
					id: 'detailCard',
					html: content + '<hr>' +
					// facebook share
					'<iframe src="http://www.facebook.com/plugins/like.php?href=' + rec.data.link + '&amp;' + 
					'layout=button_count&amp;show_faces=false&amp;action=like&amp;colorscheme=light" ' +
					'scrolling="no" frameborder="0" allowTransparency="true" style="border:none; overflow:hidden; height:20px; width:85px;"></iframe>' 
					
// https://dev.twitter.com/docs/tweet-button
					
//'<a href="https://twitter.com/share" class="twitter-share-button" data-url="' + rec.data.link + '" data-text="' + rec.data.title + '" data-via="snsr" data-lang="nl">Tweet</a>' +  
//'<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0]; if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js"; fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>'

					
					
					
//					// twitter share
//					'<a href="http://twitter.com/share" class="twitter-share-button"' +
//					'data-text="' + rec.data.title +'"' +
//					'data-url="' + rec.data.link + '" data-count="horizontal"' + 
//					'data-via="snsr">Tweet</a>' +
//					'<script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script></div>'
					
				})
};


Ext.define('Sensor.view.NewsList', {
 extend: 'Ext.navigation.View',
 requires: ["Ext.List", "Sensor.store.SensorStore"],
 fullscreen: true,
 id: 'navigationviewid',
 flex:1,
 config : {
	styleHTMLContent: true,

    navigationBar: {
	    docked: 'bottom',
	    ui: 'dark', // dark / active / light / neutral
	    items : [ {
	    	
	    	align: 'right',
	    	xtype: 'button',
	    	iconMask: true,  
	    	title: 'Home',
        	iconCls: 'home',
        	listeners: {
         	 tap :  function getTabBarItem(obj) {
				Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    			Ext.Viewport.add({ xclass: 'Sensor.view.Main' });
				}     
	         } // listeners
		}, ]
    },	
	
	layout: {
    	animation: { 
    		type: 'slide',	// null, slide, fade, flip, cube, pop
    		direction: 'left',
    		duration: 500
    	},
    	type: 'card',
    },	

    
	items : [
 	{	
		xtype: 'list',
		id : 'nieuwsLijst',
		flex:1,
		styleHtmlContent: true,
		store: 'SensorStore',
	    itemTpl: '<div class="NewsListItem"><div class="NewsListItemBackground" style="background-image:url(\'{articleRoot}/more.jpg\');"><div class="NewsListItemText">{title}</div></div></div>',
 		listeners: { 			
 			itemtap: getContent,			
	 	}
	 	
	},
	]
	
 }
	
	
});
