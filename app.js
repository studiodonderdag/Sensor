Ext.application({
    name: 'Sensor',
    views: ['Main'],

    launch: function() { 

        // Initialize the main view
        Ext.create('Sensor.view.Main');
    }
});
