let svg = d3.select('svg');

svg.selectAll('circle')
    .style('fill', 'orangered')
  .transition()
    .delay(750)
    .style('fill', 'blue');