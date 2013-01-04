


var getContent = function(view, index, item, e) {
				// get the clicked record link
 				var rec = view.getStore().getAt(index);
	 			var photoAlbumURL = rec.data.link;
	 			// add the feed link to the sensor php xml->rss converter
				var photoAlbumRSS = 'http://studiodonderdag.nl/sensor.php?albumURL=' + photoAlbumURL;
				
				// define a model for the on the fly loaded feed	 			
	 			Ext.define("photoFeedModel", {
	 			 extend: "Ext.data.Model",
	 			 fields: [
	 				{
	 				 name: 'contentSnippet',  type: 'string',
	 				 name: 'content',  type: 'string',
	 				 name: 'link',  type: 'string'
	 				}
	 			 ]
	 			});
	 			// create a store to use the google feed reader to get the album rss data
				
				
//	 			Ext.define("Sensor.store.SensorNewsStore", {
//					extend: 'Ext.data.Store',
//				requires: ["Ext.data.proxy.JsonP", "photoFeedModel"  ],
//	 			config: {
//				    model: 'photoFeedModel',
//				    autoLoad: true,
//				    
//				    proxy: {
//				        type: 'jsonp',
//				        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=' + photoAlbumRSS,
//				        reader: {
//				            type: 'json',
//				            rootProperty: 'responseData.feed.entries'
//				            }
//				        },        
//				    }   
//				});
				
				var photoFeedStore = new Ext.data.Store({
					model: 'photoFeedModel',
					proxy: {
						type: 'jsonp',
						url :'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=5&q=' + photoAlbumRSS,
						reader: {
			            	type: 'json',
			            	rootProperty: 'responseData.feed.entries'
			            }
			        },    
//					listeners: {
//						load: function(photoFeed, r){console.log(r)}
//					}
				});
				// the actual load of the store
				photoFeedStore.load();
				
				
//	 						
				Ext.ComponentManager.get('photoviewid').push({ 
					scrollable: 'vertical',
					id: 'detailCard',
					xtype: 'list',
					styleHtmlContent: true,
					store: 'SensorNewsStore',
//					store: 'photoFeedStore',
					itemTpl: '{title}',
					listeners: {
						initialize: function testFunction() {
							console.log( photoAlbumURL );
						}
					},
					
				});
				
				
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
		store: 'SensorPhotoStore',
 		listeners: { 			
 			itemtap: getContent,			
	 	},
		
	    itemTpl: [
	    	'<div class="FotoListItem">',
	    	'<div class="FotoListItemBackground" style="background-image:url(\'{articleImage}\');">',
	    	'</div>',
	    	'<div class="spacer">&nbsp;</div>',
	    	'<div class="FotoListItemText"><b>{title}</b><br />{contentSnippet}</div>',
	    	'</div>'
 		].join(''),
	},
	]
    
    
} //config    
});
