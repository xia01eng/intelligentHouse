    function on_c(){
		var client_c_c = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_c.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("1");//set body
			    message.destinationName ="C";// set topic
                client_c_c.send(message);
				}
		});
	}	

    function off_c(){
		var client_c_c = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_c.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("0");//set body
			    message.destinationName ="C";// set topic
                client_c_c.send(message);
				}
		});
	}	