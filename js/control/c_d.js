    function on_d(){
		var client_c_d = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_d.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("1");//set body
			    message.destinationName ="DO";// set topic
                client_c_d.send(message);
				}
		});
	}	

    function off_d(){
		var client_c_d = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_d.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("0");//set body
			    message.destinationName ="DO";// set topic
                client_c_d.send(message);
				}
		});
	}	