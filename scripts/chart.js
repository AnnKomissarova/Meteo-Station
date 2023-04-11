const data = {
  labels: ['00', '06', '12', '18', '24'],
  datasets: [{
    label: '',
    data: [0, 5, 10, 15, 20, 25, 30, 35],
    backgroundColor: [
      '#FF993380'
    ],
    borderColor: [
      '#FF9933'
    ],
    borderWidth: 1,
    fill: true,
    cubicInterpolationMode: 'monotone',
  }]
};

let hoverMarker;
const hoverMarkerBackground = {
  id: 'hoverMarkerBackground',
  afterDatasetsDraw(chart, args, plugins) {
    const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;
    if(hoverMarker === undefined){
      return '';
    }

    ctx.save();
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255, 255, 255, 1)';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.lineWidth = 2;
    ctx.moveTo(hoverMarker, top);
    ctx.lineTo(hoverMarker, bottom);
    
    ctx.stroke();
    ctx.lineTo(left, bottom);
    ctx.lineTo(left, top);
    ctx.fill();
  },
  afterEvent(chart, args) {
    
    const xColor = args.event.x;
    if(args.inChartArea) {
      hoverMarker = xColor;
    } else {
      hoverMarker = undefined;
    }
    args.changed = true;
  }
}

// config 
const config = {
  type: 'line',
  data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
        position: 'right'
      } 
    }
  },
  plugins: [hoverMarkerBackground]
};

Chart.defaults.plugins.legend.display = false;

// render init block
const myChart = new Chart(
  document.querySelector('.chart'),
  config
);



 