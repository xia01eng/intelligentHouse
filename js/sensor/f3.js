var f3;
              var client_f3 = new Paho.MQTT.Client("192.168.0.111", 9001, "f3");
 
              client_f3.onMessageArrived = function (msg) {
                  f3 = parseFloat(msg.payloadString);
                  if (f3 == "0") {
                    document.getElementById("data_f3").innerHTML = "有火";
                    document.getElementById("warning_study").innerHTML = "发生火灾";
                    message = new Paho.MQTT.Message("1");
                    message.destinationName = "B";
                    client_t.send(message);
                    
                    alert("警告：发生火灾！！！");
                    
                  }
                  else {
                    document.getElementById("data_f3").innerHTML = "无火";
                  }
      };
 
              client_f3.connect({
                  onSuccess: function () {
                       client_f3.subscribe("F3");
               }
      });


