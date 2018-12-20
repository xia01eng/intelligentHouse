    function on_l_bedroom(){
		var client_c_l_bedroom_on = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_on.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("1");//set body
				//var data = ["L","L2","L3","L4","L5"];
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_on.send(message);

				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	



    function off_l_bedroom(){
		var client_c_l_bedroom_off = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_off.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("2");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_off.send(message);
				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	


	    function on_l_diningroom(){
		var client_c_l_bedroom_on = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_on.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("5");//set body
				//var data = ["L","L2","L3","L4","L5"];
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_on.send(message);

				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	



    function off_l_diningroom(){
		var client_c_l_bedroom_off = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_off.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("6");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_off.send(message);
				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	


	    function on_l_sittingroom(){
		var client_c_l_bedroom_on = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_on.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("9");//set body
				//var data = ["L","L2","L3","L4","L5"];
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_on.send(message);

				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	



    function off_l_sittingroom(){
		var client_c_l_bedroom_off = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_off.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("10");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_off.send(message);
				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	


	    function on_l_study(){
		var client_c_l_bedroom_on = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_on.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("3");//set body
				//var data = ["L","L2","L3","L4","L5"];
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_on.send(message);

				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	



    function off_l_study(){
		var client_c_l_bedroom_off = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_off.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("4");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_off.send(message);
				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	

	    function on_l_toilet(){
		var client_c_l_bedroom_on = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_on.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("7");//set body
				//var data = ["L","L2","L3","L4","L5"];
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_on.send(message);

				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	



    function off_l_toilet(){
		var client_c_l_bedroom_off = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_off.connect({
			onSuccess: function () {
				message = new Paho.MQTT.Message("8");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_off.send(message);
				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}










	//house

	    function on_l_house(){
		var client_c_l_bedroom_on = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_on.connect({
			onSuccess: function () {
				//var data1 = ["1","3","5","7","9"];
				//for (var j = 0; j < data1.length; j++) {
					 
					//message.destinationName =topic;// set topic
					/*
                    message1 = new Paho.MQTT.Message("1");//set body
                    message1.destinationName = "L";
                    client_c_l_bedroom_on.send(message1);

                    message3 = new Paho.MQTT.Message("3");//set body
                    message3.destinationName = "L";
                    client_c_l_bedroom_on.send(message3);

                    message5 = new Paho.MQTT.Message("5");//set body
                    message5.destinationName = "L";
                    client_c_l_bedroom_on.send(message5);

                    message7 = new Paho.MQTT.Message("7");//set body
                    message7.destinationName = "L";
                    client_c_l_bedroom_on.send(message7);

                    message9 = new Paho.MQTT.Message("9");//set body
                    message9.destinationName = "L";
                    client_c_l_bedroom_on.send(message9);


                    
                    
                    message5 = new Paho.MQTT.Message("5");//set body
                    message7 = new Paho.MQTT.Message("7");//set body
                    message9 = new Paho.MQTT.Message("9");//set body
                    
                    
                    message5.destinationName = "L";
                    message7.destinationName = "L";
                    message9.destinationName = "L";
                    
                    
                    client_c_l_bedroom_on.send(message5);
                    client_c_l_bedroom_on.send(message7);
                    client_c_l_bedroom_on.send(message9);
                    */

                    


				//}
				
				//var data = ["L","L2","L3","L4","L5"];
				message = new Paho.MQTT.Message("11");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_on.send(message);

				}
				
			}
		});
		client_c_l_bedroom_on.disconnect();
	}	



	    function off_l_house(){
		var client_c_l_bedroom_off = new Paho.MQTT.Client("192.168.0.111", 9001, "xiaoleng");
		client_c_l_bedroom_off.connect({
			onSuccess: function () {
				
				//var data = ["L","L2","L3","L4","L5"];
				message = new Paho.MQTT.Message("12");//set body
				var data = ["L"];
				for (var i = 0; i < data.length; i++) {
					topic = data[i];
					message.destinationName =topic;// set topic
                    client_c_l_bedroom_off.send(message);

				}
				
			}
		});
		client_c_l_bedroom_off.disconnect();
	}	