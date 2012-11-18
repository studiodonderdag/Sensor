
Ext.define("Sensor.model.TwitterModel", {
extend: "Ext.data.Model",
config: {
    fields: ['id', 'text', 'from_user', 'profile_image_url']
} 
});