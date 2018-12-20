var a;
              var client_a = new Paho.MQTT.Client("192.168.0.111", 9001, "a");
 
              client_a.onMessageArrived = function (msg) {
                  a = parseFloat(msg.payloadString);
                  if (a > "400") {
                    document.getElementById("data_a").innerHTML = msg.payloadString;
                    document.getElementById("warning_diningroom").innerHTML = "餐厅烟雾";
                    message = new Paho.MQTT.Message("1");
                    message.destinationName = "B";
                    client_t.send(message);

                    alert("警告：餐厅烟雾！！！");
                  }
                  else {
                    document.getElementById("data_a").innerHTML = msg.payloadString;
                  }

      };
 
              client_a.connect({
                  onSuccess: function () {
                       client_a.subscribe("A");
               }
      });


