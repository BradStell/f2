let svg = d3.select('svg');

let circle = svg.selectAll('circle')
    .data([32, 57, 112, 293, 445])
    .attr('cy', 60)
    .attr('cx', (d, i) => i * 100 + 30)
    .attr('r', (d) => Math.sqrt(d))
    .style('fill', 'steelblue')
  .enter().append('circle')
    .attr('cy', 60)
    .attr('cx', (d, i) => i * 100 + 30)
    .attr('r', (d) => Math.sqrt(d))
    .attr('fill', 'steelblue');