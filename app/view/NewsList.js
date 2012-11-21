Ext.define('Sensor.view.NewsList', {
 extend: 'Ext.Container',
 requires: ["Ext.List", "Sensor.store.SensorStore"],
 xtype: 'newslist', // name reference 
		
 config : {
	styleHTMLContent: true,
	layout: 'fit',
	
    scrollable: {
    	direction: 'vertical',
    	directionLock: true
    },
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },	
	
	items : [
 	{	
		xtype: 'list',
		type: 'vbox',
		id : 'nieuwsLijst',
		flex:1,
		styleHtmlContent: true,
		store: 'SensorStore',
	    itemTpl: '<div class="NewsListItem"><div class="NewsListItemBackground" style="background-image:url(\'{articleRoot}/more.jpg\');"><div class="NewsListItemText">{title}</div></div></div>',

 		listeners: {
	 		itemtap: function(view, index, item, e) {
 				var rec = view.getStore().getAt(index);
	 			var articleRoot = rec.data.articleRoot;
	 			// het eerste plaatje van een artikel heet altijd more.jpg
	 			// deze staat in de root van de index.xml van het artikel 
	  			var imageLink = articleRoot + "/more.jpg";
	 			var imageLink = '<img src="' + imageLink + '" width=100%</img>';
	 			var content = rec.data.content;
				// de images in het artikel gebruiken relatieve paden
	 			// voor iedere img src moet het complete pad toegevoegd worden
	 			content=content.replace(/src="/g, "class=\"articleImage\" src=\""+articleRoot+"/");
	 			var content = imageLink + content;
				//console.log( content );
			},
			
	 	}
	 	
	},
	]
	
 }
	
	
});
