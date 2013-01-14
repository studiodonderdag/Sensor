
var showLargePhoto = function(link) {
	Ext.ComponentManager.get('FotoFullContainer').setStyle( { backgroundImage : 'url('+ link  +')' } );
};

var getContent = function(view, index, item, e) {
				// get the clicked record link
 				var rec = view.getStore().getAt(index);
	 			var photoAlbumURL = rec.data.link;
	 			// add the feed link to the sensor php xml->rss converter
				var photoAlbumRSS = 'http://studiodonderdag.nl/sensor.php?albumURL=' + photoAlbumURL;
				// deze link is voor de online versie (de Aptana webserver ondersteunt geen PHP zonder de PDT plugin)
//				var photoAlbumRSS = '/Sensor/sensor.php?albumURL=' + photoAlbumURL;
				
				// define a model for the on the fly loaded feed	 			
	 			Ext.define('photoFeedModel', {
	 			 extend: 'Ext.data.Model',
	 			 fields: [
	 				{
	 				 name: 'contentSnippet',  type: 'string',
	 				 name: 'content',  type: 'string',
	 				 name: 'link',  type: 'string'
	 				}
	 			 ]
	 			});
	 			// create the store
				Ext.create('Ext.data.Store', {
					model: 'photoFeedModel',
					storeId: 'photoFeedStore',
					proxy: {
						type: 'jsonp',
						// the num number should be the same as the amount of images in the album
						url :'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=' + photoAlbumRSS,
						reader: {
			            	type: 'json',
			            	rootProperty: 'responseData.feed.entries'
			            }
			        },    
					listeners: {
//						log the loaded foto store array
//						load: function(photoFeedStore, r){console.log(r)}
					}
				});

				// push de shit hieronder in de photoviewid navigationview container.
				// deze nieuwe container bevat de photo album pagina met een backbutton
				Ext.ComponentManager.get('photoviewid').push({					
//				xtype: 'container',
				id: 'FotoAlbum',
				layout: {
					type: 'vbox',
					scrollable: true,
					fullscreen: true,
					styleHtmlContent : true,
				},		
				items: [
				{
					flex:1,
					xtype: 'container',
					html: '',
					id: 'FotoFullContainer',
				},
				{
					xtype: 'container',
					id: 'FotoThumbContainer',
					height: 70,
					scrollable : {
                    	direction : 'horizontal',
                    	Useindicators : true,
                	},
                	// hele boel configuratie om het mooi te laten snappen en scrollen
                	// nog niet echt bekeken wat het allemaal doet maar ziet er leuk uit
                	// ik wil nog uitzoeken of je per image kun snappen op een soort grid
                	// niet belangrijk nu ;-)
                	momentumEasing: {
			            momentum: {
			                acceleration: 60,
			                friction: 0.8
			            },
			            bounce: {
			                acceleration: 10,
			                springTension: 0.1
			            }
			        },
                	// This is used when snapping is turned on, like in a Picker
			        snapEasing: {
			            duration: 400,
			            exponent: 4
			        },
			        // This is used when dragging the list out of bounds. E.g. 0.5 causes
			        // the scroller to move half a pixel for every pixel you drag it as
			        // soon as you are out of bounds.
			        outOfBoundRestrictFactor: 0.5,
                	
					layout: 'hbox',
					// dit moeten alle thumbnails worden uit de store (de images toevoegen aan id photoContainer)
					// het toevoegen moet gebeuren uit de store in het initialize script.
					defaults: {
						type: 'container',
						width: '400',   // this is the image container width, container will scroll/bounce back if the with is smaller then the content
					},
					
					items: [
//						{ html: 'images could not be loaded'},
					],
					// laden van de photoFeedStore images
					listeners: {
						initialize: function loadThumbNails() {
//							console.log( 'initialize container' );
							Ext.getStore('photoFeedStore').load(function(albumPhotos) {	
							
							for (i=0; i < albumPhotos.length; i++)
								{
						 			var thumbnail = albumPhotos[i].raw.content;
						 			var largePhoto = albumPhotos[i].raw.link;
								 	Ext.ComponentManager.get('FotoThumbContainer').add({
								 		html: '<img onClick=showLargePhoto("'+ largePhoto +'") class="FotoThumb" src='+thumbnail+'></img>',
								 	});
								}
					 		});		 		
						}
					},
				
				}
				],
				// end of pushed container
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
