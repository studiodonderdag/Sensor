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
				Ext.ComponentManager.get('photoviewid').push({ 
					scrollable: 'vertical',
					id: 'detailCard',
					html: content + '<hr class="newshr">',					
				})
};


Ext.define('Sensor.view.Photos', {
 extend: 'Ext.navigation.View', 
 requires: ["Ext.List" ],
 fullscreen: true,
 id: 'photoviewid',
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
		id: 'FotoLijst',
		flex:1,
		styleHtmlContent: true,
		store: 'SensorStore',
 		listeners: { 			
 			itemtap: getContent,			
	 	},
		
	    itemTpl: [
	    	'<div class="FotoListItem">',
	    	'<div class="FotoListItemBackground" style="background-image:url(\'{articleRoot}/more.jpg\');">',
	    	'</div>',
	    	'<div class="spacer">&nbsp;</div>',
	    	'<div class="FotoListItemText"><b>{title}</b><br />{contentSnippet}</div>',
	    	'</div>'
 		].join(''),
	},
	]
    
    
} //config    
});
