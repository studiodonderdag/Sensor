Ext.define('Sensor.view.Main', {
 extend: 'Ext.Container',
 stores : ['SensorStore'],	
 config: {
	style: 'background-image: url(./resources/images/bg_papier.jpg)',
	id: 'mainmenu',
	layout: {
		type: 'vbox',
		scrollable: true,
		fullscreen: true,
		styleHtmlContent : true,
	},		
	items: [
	{	// top container in vbox for logo		
		height: 80,
		id: 'header',
		items: [
			{   xtype: 'image', mode: 'image', src: './resources/images/logo_sensor.png', baseCls: 'sensorLogo', },
			{   xtype: 'image', mode: 'image', src: './resources/images/logo_han.png', baseCls: 'hanLogo', },
        ]
	},
	{	// center container in vbox for carousel
		xtype: 'carousel',
		id: 'carousel',
		flex:1,
		activeItem: 0,	// start at first item in carousel
		indicator: true, // carousel navigation indicators
		// listener voor carousel
		listeners : {
		 initialize: {
		 	fn: function() {

		 	Ext.getStore('SensorNewsStore').load(function(articles) {	
		 		 var lastArticleImage = articles[0].data.articleRoot + '/more.jpg';
				 Ext.getCmp('NewsList').setStyle( { background : 'url('+ lastArticleImage  +')' } );		 		
				 Ext.getCmp('NewsList').addCls( 'menuItemBackground'  );
//				 console.log(Ext.getCmp('NewsList').getStyle('background-image') );
		 		});
		 		
		 	} // function
		 } // initialize
		}, // listeners
		// default listeners voor alle carousel items		
		defaults: {
			listeners : {
				 tap: {
        			fn : function() {
    				 Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    				 Ext.Viewport.add({ xclass: 'Sensor.view.' + this.id });
        			},
        			element : 'element',
       			 }	      			 
			} // listener						
		},
		
		// carousel items
	    items: [
	    {
				id : 'NewsList', // this needs to be the name of the view xtype	
				cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/nieuws.jpg");',
    			html: '<div class="menuItemLabel">Nieuws</div>',
	    }, // newslist item	
    	{
    			id : 'Photos',
    			cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/fotos.jpg");',
    			html: '<div class="menuItemLabel">Foto\'s</div>',
    	},
    	{
    			id : 'Contact',
    			cls: 'menuItemBackground',
    			style: 'background-image:url("./resources/images/contact-header.jpg");',
    			html: '<div class="menuItemLabel">Contact</div>',
    	}    	
    	] // carousel items
	},
	{	// bottom container in vbox for lasttweet
        xtype: "dataview",	
		style: 'border: none; display: block;' + 
				'text-align: center; font-size: 12px; font-style:italic',
        scrollable: false,
        store: "TwitterStore",
        height: 40,
        itemTpl: '{htmlText}',
    },
	] 
} // config
});


