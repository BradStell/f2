let margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
};

// for outer chart size of 960x500
let width = 960 - margin.left - margin.right;
let height = 500 - margin.top - margin.bottom;

// new d3 v4.0^ syntax for rangeBands
let x = d3.scaleBand()
    .rangeRound([0, width])
    .padding(.1);

var y = d3.scaleLinear()
    .range([height, 0]);

let xAxis = d3.axisBottom()
    .scale(x)

let yAxis = d3.axisLeft()
    .scale(y)
    .ticks(10, '%');

let chart = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

d3.tsv("data.tsv", type, function(error, data) {
  x.domain(data.map(function(d) { return d.name; }));
  y.domain([0, d3.max(data, function(d) { return d.value; })]);

  chart.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0,${height})`)
        .call(xAxis);

  chart.append('g')
      .attr('class', 'y axis')
      .call(yAxis)
    .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('Frequency');

  chart.selectAll('.bar')
      .data(data)
    .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', (d) => x(d.name))
      .attr('y', (d) => y(d.value))
      .attr('height', (d) => height - y(d.value))
      .attr('width', x.bandwidth());
});

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}