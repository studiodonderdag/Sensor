Ext.define('Sensor.store.SensorStore', {
	extend: 'Ext.data.Store',
	
	config: {
		model: 'Sensor.model.SensorModel',
		// list wordt gesorteerd op name 
		sorters: 'name',
		data: [
        	  {name: 'Peter'},
			  {name: 'Jeroen'},
        	  {name: 'Sietze'},
        ],  
	
	}

});