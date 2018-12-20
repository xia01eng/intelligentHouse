var w2;
              var client_w2 = new Paho.MQTT.Client("192.168.0.111", 9001, "w2");
 
              client_w2.onMessageArrived = function (msg) {
                  w2 = parseFloat(msg.payloadString);
                  if (w2 == "0") {
                    document.getElementById("data_w2").innerHTML = "有水";
                    document.getElementById("warning_toilet").innerHTML = "有水渗漏";
                    message = new Paho.MQTT.Message("1");
                    message.destinationName = "B";
                    client_t.send(message);
                    
                    alert("警告：有水渗漏！！！");
                    
                  }
                  else {
                    document.getElementById("data_w2").innerHTML = "无水";
                  }
      };
 
              client_w2.connect({
                  onSuccess: function () {
                       client_w2.subscribe("W2");
               }
      });


