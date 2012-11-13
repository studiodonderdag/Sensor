Ext.define('Sensor.view.News', {
	extend: 'Ext.NestedList',
	requires: [ 'Sensor.store.SensorStore' ],


	
	config: {
		fullscreen: true,
		maxWidth: 640,
		indicator: true,
		styleHtmlContent: true,
		showAnimation: true,
		toolbar: true,
    	items: [
        		{
        			xtype: 'nestedlist',
                    store: 'SensorStore',
                                  
        			//title: 'Nieuwsoverzicht',
                    //displayField: 'articleRoot',
            		displayField: 'title',                    
            		title: '',
            		width: '350',
                    //baseCls: 'blaah',
                    detailCard: {
                        xtype: 'container',
                        baseCls: 'detailCard',
                        scrollable: true,
                        styleHtmlContent: true,
                        maxWidth: 640,
                    },
                    
                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
                        	// de image bij de RSS feed heet altijd more.jpg
                        	// deze image staat op hetzelfde niveau als de index.xml 
                        	var articleRoot = post.get('articleRoot');
                        	var imageLink =  articleRoot + "/more.jpg";
                        	var imageLink = '<img src="' + imageLink + '"width=100%</img>';

							var content=post.get('content')
							// de images in het artikel gebruiken relatieve paden
							// voor de img src moet het complete pad toegevoegd worden
							content=content.replace(/src="/g, "class=\"articleImage\" src=\""+articleRoot+"/");
//							console.log( content );                        	
                        	var content = imageLink + content;
                            this.getDetailCard().setHtml(content);
                        }
                    }        			
        			
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


