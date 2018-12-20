var t4;
              var client_t4 = new Paho.MQTT.Client("192.168.0.111", 9001, "t4");
 
              client_t4.onMessageArrived = function (msg) {
                  t4 = parseFloat(msg.payloadString);
        document.getElementById("data_t4").innerHTML = msg.payloadString;
        if (t4>40) {
          //var x = document.createElement("AUDIO");
          //x.setAttribute("src", "http://www.w3school.com.cn/i/horse.ogg");
          //x.setAttribute("autoplay", "autoplay");
          //document.body.appendChild(x);
          document.getElementById("warning_diningroom").innerHTML = "温度过高";
          message = new Paho.MQTT.Message("1");
          message.destinationName = "B";
          client_t.send(message);
        
          alert("警告：温度过高！！！");
        }
        //client_t4.disconnect();
      };
 
              client_t4.connect({
                  onSuccess: function () {
                       client_t4.subscribe("T4");
               }
      });






              Highcharts.setOptions({
    global: {
        useUTC: false
    }
});
function activeLastPointToolip(chart) {
    var points = chart.series[0].points;
    chart.tooltip.refresh(points[points.length -1]);
}
$('#t4').highcharts({
    chart: {
        type: 'spline',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,
        events: {
            load: function () {
                // set up the updating of the chart each second
                var series = this.series[0],
                    chart = this;
                setInterval(function () {
                    var x = (new Date()).getTime(), // current time
                        y = t4;
                    series.addPoint([x, y], true, true);
                    activeLastPointToolip(chart)
                }, 1000);
            }
        }
    },
    title: {
        text: '房间温度实时数据'
    },
    xAxis: {
        type: 'datetime',
        tickPixelInterval: 150
    },
    yAxis: {
        title: {
            text: '值'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                Highcharts.numberFormat(this.y, 2);
        }
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    series: [{
        name: ' ',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;
            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: t4
                });
            }
            return data;
        }())
    }]
}, function(c) {
    activeLastPointToolip(c)
});




