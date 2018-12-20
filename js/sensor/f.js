var f;
              var client_f = new Paho.MQTT.Client("192.168.0.111", 9001, "f");
 
              client_f.onMessageArrived = function (msg) {
                  f = parseFloat(msg.payloadString);
                  if (f == "0") {
                    document.getElementById("data_f").innerHTML = "有火";
                    document.getElementById("warning_diningroom").innerHTML = "发生火灾";
                    message = new Paho.MQTT.Message("1");
                    message.destinationName = "B";
                    client_t.send(message);
                    
                    alert("警告：发生火灾！！！");

                  }
                  else {
                    document.getElementById("data_f").innerHTML = "无火";
                  }
      };
 
              client_f.connect({
                  onSuccess: function () {
                       client_f.subscribe("F");
               }
      });


