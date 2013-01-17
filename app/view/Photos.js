

var showShareContainer = function(photoLink, photoTitle) {
	var myShareContainer = Ext.ComponentManager.get('shareContainer');
	// remove any current items
	myShareContainer.removeAll(true, true);
	myShareContainer.add({				
		html: '<div class="share-text">Deel deze foto:</div>' +
		// facebook share met een div en een plaatje (css)
		'<div class="facebook-button"><a href="http://www.facebook.com/sharer.php?u='+ photoLink +'&ampt='+ photoTitle + '" target="_blank"></a></div>'					
		// twitter share met een div en een plaatje (css)
		+ '<div class="tweet-button"><a href="https://twitter.com/intent/tweet?text='+ photoTitle + ' - ' + photoLink +'" target="_blank"></a></div>'					
		// Mail share met een div en een plaatje (css)
		+ '<div class="mail-button"><a rel="nofollow" href="mailto:?body=' + photoLink +' &subject='+ photoTitle + '"></a>'
	});	
}

var showLargePhoto = function(photoLink, photoTitle) {	
	
	var myContainer = Ext.ComponentManager.get('FotoFullContainer');
	// remove any current items
	myContainer.removeAll(true, true);
	maskImageLoad( 'FotoFullContainer', photoLink );
//	myContainer.element.on ({
//		tap: function() {
//			console.log(img.src);		
//			Ext.Msg.alert('Download', '<a target=_new href='+img.src+'>link</a>', Ext.emptyFn);		
//			window.win = open (img.src);
//			var url=img.src;  
//			window.open(url,'_blank');
//		}
//	}); 
	
	// update share container
	showShareContainer( escape(photoLink) , photoTitle);
};

var getContent = function(view, index, item, e) {
				// get the clicked record link
 				var rec = view.getStore().getAt(index);
	 			var photoAlbumURL = rec.data.link;
	 			// add the feed link to the sensor php xml->rss converter
	 			// Pas hieronder de URL aan
				var photoAlbumRSS = 'http://studiodonderdag.nl/sensor.php?albumURL=' + photoAlbumURL;
				// deze link is voor de online versie (de Aptana webserver ondersteunt geen PHP zonder de PDT plugin)
//				var photoAlbumRSS = '/sensor.php?albumURL=' + photoAlbumURL;
				
				// define a model for the on the fly loaded feed	 			
	 			Ext.define('photoFeedModel', {
	 			 extend: 'Ext.data.Model',
	 			 fields: [
	 				{
	 				 name: 'contentSnippet',  type: 'string',
	 				 name: 'content',  type: 'string',
	 				 name: 'link',  type: 'string',
	 				}
	 			 ]
	 			});
	 			// create the store
				Ext.create('Ext.data.Store', {
					model: 'photoFeedModel',
					storeId: 'photoFeedStore',
					proxy: {
						type: 'jsonp',
						// the num number should be larger or the same as the amount of images in the album
						url :'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=100&q=' + photoAlbumRSS,
						reader: {
			            	type: 'json',
			            	rootProperty: 'responseData.feed.entries'
			            }
			        },    
				});

				// push de code hieronder in de photoviewid navigationview container.
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
					id: 'shareContainer',
					height: 40,
				},
				{
					xtype: 'container',
					id: 'FotoThumbContainer',
					height: 70,
					scrollable : {
                    	direction : 'horizontal',
                    	Useindicators : true,
                	},
                	
					layout: 'hbox',
					defaults: {
						type: 'container',
						width: '400',   // this is the image container width, container will scroll/bounce back if the width is smaller then the content
					},
					
					items: [
//						{ html: 'images could not be loaded'},
					],
					// laden van de photoFeedStore images
					listeners: {											
						initialize: function loadThumbNails() {							
							Ext.getStore('photoFeedStore').load(function(albumPhotos) {	
							// load first image into FotoFullContainer
							showLargePhoto(albumPhotos[0].raw.link, 'foto');						
							// load first shareContainer
							showShareContainer(escape(albumPhotos[0].raw.link), 'foto');
							// fill container with thumbnails	
							for (i=0; i < albumPhotos.length; i++)
								{
						 			var thumbnail = albumPhotos[i].raw.content;
						 			var largePhoto = albumPhotos[i].raw.link;
						 			//var titlePhoto = albumPhotos[i].raw.title;
						 			var titlePhoto = 'foto';
								 	Ext.ComponentManager.get('FotoThumbContainer').add({
								 		html: '<img onClick=showLargePhoto("'+ largePhoto +'","'+ titlePhoto +'") class="FotoThumb" src='+thumbnail+'></img>',
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
