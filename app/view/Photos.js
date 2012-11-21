Ext.define('Sensor.view.Photos', {
 extend: 'Ext.navigation.View', 
 xtype: 'photos',  // name reference
	
config : {
	styleHTMLContent: true,
	layout: 'card',
	fullscreen: true,
	ui: 'dark',
	
    navigationBar: {
	    docked: 'bottom',
	    defaults : {
	    	align: 'right',
	    	xtype: 'button',
	    	iconMask: true,
        	ui: 'neutral', // dark / active / light / neutral        	
	    },
	    items: [
        	{
        		xclass: 'Sensor.view.NewsList',
        		title: 'Home',
        		iconCls: 'home',
            	listeners: {
         			tap :  function getTabBarItem(obj) {	
						Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
    					Ext.Viewport.add({ xclass: 'Sensor.view.Main' });
					}     
	            } // listeners
            },
        ]
	}, // navigationbar

	
	
    items: [
        {
        	xtype: 'container',
        	flex:1,
        	html: 'blaa',
    		items: [
        	{        	
        	xtype: 'button',
        	text: 'Push another view!',
                listeners:{
                    tap: function(list,index,item){
                         var view = list.parent; //could use list.up('navigationview')
                    	//  var view = list.up('navigationview');
						console.log(view);
                        if (index === 0) {
                            view.push(
                            	{ 
                            		html:'detailView'
                            	}                           
                            );
                        }
                    }
                }        	
//        	handler: function() {
//        		console.log('pushed');
//        		//when someone taps this button, it will push another view into stack
//                this.push(
//                'blaah'
//                //{html: 'Some new content'}
//                );
//              }
        	}]

        }
    ]
    
} //config    
});
