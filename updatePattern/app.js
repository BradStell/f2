let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

let svg = d3.select('svg')
let width = +svg.attr('width');
let height = +svg.attr('height');
let g = svg.append('g').attr('transform', `translate(32, ${height / 2})`);

function update(data) {

  let t = d3.transition()
      .duration(750);

  // data join
  // join new data with old elements, if any
  let text = g.selectAll('text')
      .data(data, (d) => d);

  // exit old elements
  text.exit()
      .attr('class', 'exit')
    .transition(t)
      .attr('y', 60)
      .style('fill-opacity', 1e-6)
      .remove();

  // update
  // update old elements as needed
  text.attr('class', 'update')
      .attr('y', 0)
      .style('fill-opacity', 1)
    .transition(t)
      .attr('x', (d, i) => i * 32);

  // enter
  // create new elements as needed
  // after merging the entered elements with the update slection, apply operations to both
  text.enter().append('text')
      .attr('class', 'enter')
      .attr('dy', '.35em')
      .attr('y', -60)
      .attr('x', (d, i) => i * 32)
      .style('fill-opacity', 1e-6)
      .text((d) => d)
    .transition(t)
      .attr('y', 0)
      .style('fill-opacity', 1);
}

// initial display
update(alphabet);

// grab random sample of letters from alphabet, in alph order
d3.interval(() => {
  update(d3.shuffle(alphabet)
      .slice(0, Math.floor(Math.random() * 26))
      .sort());
}, 1500);