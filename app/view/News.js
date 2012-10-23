Ext.define('Sensor.view.News', {
	extend: 'Ext.TabPanel',
	requires: [ 'Sensor.store.SensorStore' ],
	
	xtype: 'newsview',
	config: {
		id: 'carousel',
		fullscreen: true,
		indicator: true,
    	items: [
        		{
        			xtype: 'nestedlist',
                    title: 'Blog',
                    iconCls: 'star',
                    displayField: 'title',
            		store: 'SensorStore',
                    
                    detailCard: {
                        xtype: 'panel',
                        scrollable: true,
                        styleHtmlContent: true
                    },

                    listeners: {
                        itemtap: function(nestedList, list, index, element, post) {
/*                    
// We moeten op een manier de XML/HTML binnenhalen van het echte artikel
// In de RSS feed zit niet het complete artikel
// Met de webpagina op een ander domein van snsr.nl krijg je de melding: Access-Control-Allow-Origin
// Even uitzoeken wat de opties zijn                        	
var myRequest = Ext.Ajax.request({
	extend: 'Ext.data.proxy.Ajax',
    url: post.get('link'),
	method:'post',
    useDefaultXhrHeader: false,
    failure: function(response) {
        console.log(response.aborted); // logs true
    }
});
*/                        	
                        	
                        	console.log(post.get('link'));
                            this.getDetailCard().setHtml(post.get('link'));
                        }
                    }        			
        			
        		}
	        	
    	]    	
	},

	
	initialize: function() {
        // Do something
		console.log('View News');	
		this.callParent();
    }
    
    
});


