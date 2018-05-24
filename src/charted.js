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
  { label: 'Brittany the Wondrous', value: 19456 },
  { label: 'Inana', value: 12046 },
  { label: 'Joel', value: 8145 },
  { label: 'Sara', value: 11983 },
  { label: 'Justin', value: 12923 },
  { label: 'Ian', value: 10456 },
  { label: 'Bradley', value: 8812 },
  { label: 'Justin', value: 12923 },
  { label: 'Ian', value: 4123 },
  { label: 'Bradley', value: 5313 },
];

var bubble = new BubbleChart(bubbleEle, bubbleConfig, bubbleData);