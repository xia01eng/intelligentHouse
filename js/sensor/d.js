var d;
              var client_d = new Paho.MQTT.Client("192.168.0.111", 9001, "d");
 
              client_d.onMessageArrived = function (msg) {

                  d = msg.payloadString;
                  var a =1;

                    document.getElementById("data_name_d").innerHTML = "人员："+msg.payloadString;
      };
 
              client_d.connect({
                  onSuccess: function () {
                       client_d.subscribe("D");
               }
      });


