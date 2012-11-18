
Ext.define("Sensor.store.TwitterStore", {
extend: "Ext.data.Store",
requires: ["Ext.data.proxy.JsonP", "Ext.dataview.List"],
config: {
    model: "Sensor.model.TwitterModel",
    autoLoad: true,
    proxy: {
        type: 'jsonp',
        url: 'https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=Snsr&count=1',
        reader: {
            type: 'json',
            rootProperty: 'responseData.feed.entries'
            }
        }
    }    
});