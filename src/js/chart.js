import { generateRandomColor } from './constants.js';

class ChartElem {
  constructor(sessionData) {
    this.chart;
    this.config = ChartElem.createChartConfig(sessionData);
    this.colorSet = new Set();
  }

  static createChartConfig(sessionData) {
    let nameTasks = [];
    for (let i = 0; i < sessionData.puzzles.length; i++) {
      nameTasks.push(sessionData.puzzles[i].name);
    }

    const chartConfig = {
      type: 'line',
      data: {
        labels: nameTasks,
        datasets: []
      },
      options: {
        title: {
          display: true,
          text: 'Comparison of results'
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    };

    return chartConfig;
  }

  createChart() {
    const ctx = document.getElementById('chart').getContext('2d');
    this.chart = new Chart(ctx, this.config);
  }

  checkUniqueName(name) {
    const users = this.config.data.datasets;
    let check = true;

    for(let i = 0; i < users.length; i ++) {
      if (users[i].label == name) {
        check = false;
        break;
      }
    }

    return check;
  }

  getNumberCharts() {
    return this.config.data.datasets.length;
  }

  addUserToChart(data) {
    if (this.checkUniqueName(data.name)) {
      let color;

      do {
        color = generateRandomColor();
      } while (this.colorSet.has(color));
      this.colorSet.add(color);
  
      const newUser = {
        label: data.name,
        data: data.time,
        backgroundColor: color,
        borderColor: color,
        borderWidth: 2,
        fill: false
      };
  
      this.config.data.datasets.push(newUser);
      this.chart.update();
    }
  }

  removeUserFromChart(name) {
    if (name) {
      const names = this.config.data.datasets.map(user => user.label);
      const index = names.indexOf(name);

      if (index === -1) {
        return;
      }

      this.config.data.datasets.splice(index, 1);
    } else {
      this.config.data.datasets.pop();
    }

    this.chart.update();
  }
}

export default ChartElem;
