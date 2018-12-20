var f2;
              var client_f2 = new Paho.MQTT.Client("192.168.0.111", 9001, "f2");
 
              client_f2.onMessageArrived = function (msg) {
                  f2 = parseFloat(msg.payloadString);
                  if (f2 == "0") {
                    document.getElementById("data_f2").innerHTML = "有火";
                    document.getElementById("warning_sittingroom").innerHTML = "发生火灾";
                    message = new Paho.MQTT.Message("1");
                    message.destinationName = "B";
                    client_t.send(message);
                    
                    alert("警告：发生火灾！！！");
                    
                  }
                  else {
                    document.getElementById("data_f2").innerHTML = "无火";
                  }
      };
 
              client_f2.connect({
                  onSuccess: function () {
                       client_f2.subscribe("F2");
               }
      });


