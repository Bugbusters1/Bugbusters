var data = generateDayWiseTimeSeries(new Date("22 Apr 2024").getTime(), 115, {
  min: 30,
  max: 90
});
var options1 = {
  chart: {
    id: "chart2",
    type: "area",
    height: 230,
    foreColor: "#ccc",
    toolbar: {
      autoSelected: "pan",
      show: false
    }
  },
  colors: ["#6d9771"],
  stroke: {
    width: 3
  },
  grid: {
    borderColor: "#555",
    clipMarkers: false,
    yaxis: {
      lines: {
        show: false
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    gradient: {
      enabled: true,
      opacityFrom: 0.55,
      opacityTo: 0
    }
  },
  markers: {
    size: 5,
    colors: ["#000524"],
    strokeColor: "#6d9771",
    strokeWidth: 3
  },
  series: [
    {
      data: data
    }
  ],
  tooltip: {
    theme: "dark",
    x: {
      format: "dd MMM yyyy"
    },
    y: {
      formatter: function(val, opts) {
        return "No. of users: " + val;
      },
      title: {
        formatter: function() {
          return "";
        }
      }
    }
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    min: 0,
    tickAmount: 4
  }
};

var chart1 = new ApexCharts(document.querySelector("#chart-area"), options1);

chart1.render();

var options2 = {
  chart: {
    id: "chart1",
    height: 130,
    type: "bar",
    foreColor: "#ccc",
    brush: {
      target: "chart2",
      enabled: true
    },
    selection: {
      fill: {
        color: "#fff",
        opacity: 0.4
      },
      xaxis: {
        min: new Date("27 Jul 2024 10:00:00").getTime(),
        max: new Date("14 Aug 2024 10:00:00").getTime()
      }
    }
  },
  colors: ["#898578"],
  series: [
    {
      data: data
    }
  ],
  stroke: {
    width: 2
  },
  grid: {
    borderColor: "#444"
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime",
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
};

var chart2 = new ApexCharts(document.querySelector("#chart-bar"), options2);

chart2.render();

function generateDayWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, y]);
    baseval += 86400000;
    i++;
  }
  return series;
}