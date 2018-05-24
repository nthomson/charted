import BaseChart from './base.js'
import * as d3 from 'd3';

class BubbleChart extends BaseChart {

  init(element) {
    this.element = d3.select(element);

    this.svg = 
      .attr('width', this.config.width)
      .attr('height', this.config.height)
      .attr('class', 'g-bubble-chart')
      .append('g');

    this.bubble = d3.pack().size([this.config.width, this.config.height]);

    this.g = this.svg.append('g').attr('transform', 'translate(2,2)')

    this.format = d3.format(",d");


      // .value(function(d) { return d.value; })
      // .sort(function(a, b) {
      //   return -(a.value-b.value);
      // })
      // .padding(5);
  }

  render(data) {
    let bubbles = d3.hierarchy(data)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });


    let node = this.g.selectAll(".node")
      .data(this.pack(bubbles).descendants())
      .enter().append("g")
        .attr("class", function(d) { return d.children ? "node" : "leaf node"; })
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

    node.append("title")
        .text(function(d) { return d.data.name + "\n" + this.format(d.value); });

    node.append("circle")
        .attr("r", function(d) { return d.r; });

    node.filter(function(d) { return !d.children; }).append("text")
        .attr("dy", "0.3em")
        .text(function(d) { return d.data.name.substring(0, d.r / 3); });
  }
}

export default BubbleChart;