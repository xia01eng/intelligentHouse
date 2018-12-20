var w;
              var client_w = new Paho.MQTT.Client("192.168.0.111", 9001, "w");
 
              client_w.onMessageArrived = function (msg) {
                  w = parseFloat(msg.payloadString);
                  if (w == "0") {
                    document.getElementById("data_w").innerHTML = "有水";
                    document.getElementById("warning_diningroom").innerHTML = "有水渗漏";
                    message = new Paho.MQTT.Message("1");
                    message.destinationName = "B";
                    client_t.send(message);
                    
                    alert("警告：有水渗漏！！！");

                  }
                  else {
                    document.getElementById("data_w").innerHTML = "无水";
                  }
      };
 
              client_w.connect({
                  onSuccess: function () {
                       client_w.subscribe("W");
               }
      });


