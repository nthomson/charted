import AreaChart from './charts/area.js';
import BubbleChart from './charts/bubble.js';

let areaEle = document.querySelector('#area-chart-test');
let areaConfig = {width: 1200, height: 500};
let areaData = [
  {date: new Date(2018, 1, 1), value: 10},
  {date: new Date(2018, 1, 2), value: 5},
  {date: new Date(2018, 1, 3), value: 7},
  {date: new Date(2018, 1, 4), value: 14},
  {date: new Date(2018, 1, 5), value: 13},
  {date: new Date(2018, 1, 6), value: 16}
];

var area = new AreaChart(areaEle, areaConfig, areaData);


var bubbleEle = document.querySelector('#bubble-chart-test');
let bubbleConfig = {width: 1200, height: 500};
let bubbleData = [
  { label: 'Tony', value: 19456 },
  { label: 'Peter', value: 12046 },
  { label: 'Stephen', value: 8145 },
  { label: 'Natasha', value: 11983 },
  { label: 'Clint', value: 12923 },
  { label: 'Bruce', value: 10456 },
  { label: 'Wanda', value: 8812 },
  { label: 'Pietro', value: 12923 }
];

var bubble = new BubbleChart(bubbleEle, bubbleConfig, bubbleData);