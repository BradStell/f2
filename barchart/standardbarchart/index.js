let data = [4, 8, 15, 16, 23, 42];

// for scaling the data (domain) to the space (range)
let x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 420]);

// short form
d3.select('.chart')
  .selectAll('div')
    .data(data)
  .enter().append('div')
    .style('width', function(d) { return x(d) + 'px'; })
    .text(function(d) { return d; });



// long form
// let chart = d3.select('.chart2');
// let bar = chart.selectAll('div');
// let barUpdate = bar.data(data);
// let barEnter = barUpdate.enter().append('div');
// barEnter.style('width', function(d) { return d * 10 + 'px'; });
// barEnter.text(function(d) { return d; });

