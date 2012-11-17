Ext.define('Sensor.view.NewsList', {
extend: "Ext.Container",
requires: ["Ext.List", "Sensor.store.SensorStore"],
name: 'NewsList',	


 config: {
	fullscreen: true,
	//maxWidth: 640,
	layout: 'fit',
	indicator: true,
    scrollable: {
    	direction: 'vertical',
    	directionLock: true
    },
    layout: {
    	type: 'vbox',
    	align: 'stretch'
    },	
	
 	items: [
 	/* nieuws lijst  */
 	{	
		xtype: 'list',
		type: 'vbox',
		flex:1,
		styleHtmlContent: true,
		store: 'SensorStore',
	    itemTpl: '<div class="NewsListItem"><div class="NewsListItemBackground" style="background-image:url(\'{articleRoot}/more.jpg\');"><div class="NewsListItemText">{title}</div></div></div>',

 		listeners: {
	 		itemtap: function(view, index, item, e) {
 				var rec = view.getStore().getAt(index);
	 			var articleRoot = rec.data.articleRoot;
	  			var imageLink = articleRoot + "/more.jpg";
	 			var imageLink = '<img src="' + imageLink + '" width=100%</img>';
	 			var content = rec.data.content;
				// de images in het artikel gebruiken relatieve paden
	 			// voor iedere img src moet het complete pad toegevoegd worden
	 			content=content.replace(/src="/g, "class=\"articleImage\" src=\""+articleRoot+"/");
	 			var content = imageLink + content;
				console.log( content );
			} 
	 	}
	    
	},
	/* bottom toolbar */	
	{
		
		xtype: 'toolbar',
                docked: 'bottom',
				
                layout : {
                	type: 'hbox',
                	align: 'center',
                	pack: 'center',
                },
                
                // Make the toolbar scrollable
                scrollable: {
                    direction: 'horizontal',
                    indicators: false
                },

                defaults: {
		         	listeners: {
         				tap :  function getTabBarItem(obj) {	
							switch(obj.getText())
							{
							case 'Home':
							    Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    							Ext.Viewport.add({ xclass: 'Sensor.view.Main' });
								console.log("Go home");
							break;
							case 'Back':
								console.log("Go back");
							}
						}     
             		} // listeners
                },
                
                // Add several items into the toolbar
                items: [
                    { 
                    	text: 'Home',
                    	align: 'right',
                    	iconMask: true,
                    	ui: 'plain',
                    	iconCls: 'home'
                    },
                    { 
                    	text: 'Back', 
                    	iconMask: true,
                    	ui: 'plain',
                    	iconCls: 'arrow_left' 
                    },
                ]
						
	},
		
 	],
 }



 
});

