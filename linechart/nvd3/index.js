$.get('http://192.168.1.116:5020/dailyprices/A', function (resp) {
  let data = resp['A dailyprices'].DailyPrices;
  console.log(data.length);

  nv.addGraph(function() {                //This adds the chart to a global rendering queue.
    var chart = nv.models.lineChart();  //Create instance of nvd3 lineChart

    chart.xAxis
        .axisLabel("X-axis Label");     //Set X-axis attributes

    chart.yAxis
        .axisLabel("Y-axis Label")      //Set Y-Axis attributes.
        .tickFormat(d3.format("d"))     //Set Y-Axis label formatting.
        ;

    d3.select("svg")                    //Select the document's <svg> element
        .datum(data)                //Attach data to the <svg> element.
        .transition().duration(500).call(chart);    //Define transition and pass the d3.selection to our lineChart.

    nv.utils.windowResize(              //Updates the window resize event callback.
            function() {
                chart.update();         //Renders the chart when window is resized.
            }
        );

    return chart;   //Must return the enclosed chart variable so the global rendering queue can store it.
  });
});