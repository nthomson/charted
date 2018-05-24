import BaseChart from './base.js'
import * as d3 from 'd3';
import * as moment from 'moment';

class AreaChart extends BaseChart {

  init(element) {
    this.element = d3.select(element);

    this.svg = this.element.append('svg')
      .attr('width', this.config.width + this.config.margin.left + this.config.margin.right)
      .attr('height', this.config.height + this.config.margin.top + this.config.margin.bottom)
      .attr('class', 'g-line-chart')
      .append('g')
      .attr('transform', 'translate(' + this.config.margin.left + ',' + this.config.margin.top + ')');

    this.x = d3.scaleTime()
      .range([0, this.config.width]);

    this.y = d3.scaleLinear()
      .range([this.config.height, 0]);

    this.area = d3.area()
      .curve(d3.curveMonotoneX)
      .x((d) => { return this.x(d.date); })
      .y1((d) => { return this.y(d.value); })
      .y0(this.config.height);

    this.xAxis = d3.axisBottom()
      .scale(this.x)
      .tickSize(-this.config.height)
      .tickFormat(d3.timeFormat('%b %d'));

    this.yAxis = d3.axisLeft()
      .scale(this.y)
      .tickSize(-this.config.width)
      .ticks(10);

    this.xele = this.svg.append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + this.config.height + ')');

    this.yele = this.svg.append('g')
      .attr('class', 'y axis');

    this.render(this.data);
  }

  render(data) {
    this.xAxis.ticks(data.length);

    this.x.domain(d3.extent(data,(d) => { return d.date; }));

    this.y.domain([
      0,
      d3.max(data, (c) => {
        return c.value;
      }) * 1.05 || 4000
    ]);

    this.xele.call(this.xAxis);
    this.yele.call(this.yAxis)

    let metric = this.svg.selectAll('.metric').data([data])

    metric
      .enter()
        .append('path')
        .attr('class', 'metric')
        .style('fill', 'rgba(100, 150, 200, 0.5)')
      .merge(metric)
        .transition()
        .attr('d',(d) => { return this.area(d); })

    // Add the scatterplot
    let points = this.svg.selectAll('.point').data(data)
    
    points
      .enter()
        .append('circle')
        .attr('class', 'point')
        .attr('r', 5)
        .attr('fill', 'rgb(100, 150, 200)')
        .attr('cx',(d) => { return this.x(d.date); })
        .attr('cy',(d) => { return this.y(d.value); })
      .merge(points)
        .transition()
        .attr('cx',(d) => { return this.x(d.date); })
        .attr('cy',(d) => { return this.y(d.value); })
        .attr('id',(d) => { return 'point-'+d.date.getTime(); })
  }
}

export default AreaChart;