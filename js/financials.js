
window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Growth Trends (INR)"
        },
      axisY: {
          valueFormatString: "##,##,###",
      },
        data: [{        
            type: "line",       
            dataPoints: [
                { label: "2016-17", y: 8708000 },
                { label: "2017-18", y: 10065000},
                { label: "2018-19", y: 17425000 },
                { label: "2019-20", y: 21000000 },
            ]
        }]
    });
    chart.render();
    
    }
    