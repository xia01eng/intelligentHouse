//document.getElementById("status_water").innerHTML="yes";

var h5;
              var client_h5 = new Paho.MQTT.Client("192.168.0.111", 9001, "h5");
 
              client_h5.onMessageArrived = function (msg) {
                  h5 = parseFloat(msg.payloadString);
        document.getElementById("data_h5").innerHTML = msg.payloadString;
        //client_h5.disconnect();
      };
 
              client_h5.connect({
                  onSuccess: function () {
                       client_h5.subscribe("H5");
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
$('#h5').highcharts({
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
                        y = h5;
                    series.addPoint([x, y], true, true);
                    activeLastPointToolip(chart)
                }, 1000);
            }
        }
    },
    title: {
        text: '房间湿度实时数据'
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
                    y: h5
                });
            }
            return data;
        }())
    }]
}, function(c) {
    activeLastPointToolip(c)
});



