
drawChart = function (event) {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        width: this.window.screen.width*0.9,
        title:{
            text: "Sales Turnover (INR)"
        },
      axisY: {
          valueFormatString: "##,##,###",
      },
        data: [{        
            type: "line",       
            dataPoints: [
                { label: "2015-16", y: 3500000 },
                { label: "2016-17", y: 8708000 },
                { label: "2017-18", y: 10065000},
                { label: "2018-19", y: 17425000 },
                { label: "2019-20", y: 21000000 },
            ]
        }]
    });
    chart.render();
    
    }

window.addEventListener('load', drawChart)
window.addEventListener('resize', drawChart)
    