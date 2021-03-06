
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
	 			var title = '<div class="articleTitle">' + rec.data.title + '</div>';	 			
	 			var content = imageLink + title + content;
				Ext.ComponentManager.get('navigationviewid').push({ 
					scrollable: 'vertical',
					id: 'detailCard',
					html: content + '<hr class="newshr">'
					// facebook share met een div en een plaatje (css)
					+ '<div id="facebook-button"><a href="http://www.facebook.com/sharer.php?u='+ rec.data.link +'&ampt='+ rec.data.title + '" target="_blank"></a></div>'
					// twitter share met een div en een plaatje (css)
					+ '<div id="tweet-button"><a href="https://twitter.com/intent/tweet?text='+ rec.data.title + ' - ' + rec.data.link +'" target="_blank"></a></div>'
					// Mail share met een div en een plaatje (css)
					+ '<div id="mail-button"><a rel="nofollow" href="mailto:?body=' + rec.data.link +' &subject='+ rec.data.title + '"></a>'
				})
};


Ext.define('Sensor.view.NewsList', {
 extend: 'Ext.navigation.View',
 requires: ["Ext.List", "Sensor.store.SensorNewsStore"],
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
		store: 'SensorNewsStore',
	    itemTpl: '<div class="NewsListItem"><div class="NewsListItemBackground" style="background-image:url(\'{articleRoot}/more.jpg\');"><div class="NewsListItemText">{title}</div></div></div>',
 		listeners: { 			
 			itemtap: getContent,			
	 	}
	 	
	},
	]
	
 }
	
	
});
