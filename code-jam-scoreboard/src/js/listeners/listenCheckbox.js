import { getNumberFromString } from '../constants.js';

function addListenerForCheckbox(chart) {
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  const numberCharts = 10;

  for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', function(event) {

      if (chart.getNumberCharts() <= numberCharts) {
        const users = document.querySelectorAll('.user');

        for (let i = 0; i < users.length; i++) {
          const checkBox = users[i].querySelector('input');
          const name = users[i].querySelectorAll('span')[0].innerHTML;

          if (checkBox.checked == true) {
            const spans = users[i].querySelectorAll('span.tooltip');
            const time = [];

            for (let index in spans) {
              if (index < 10) {
                time.push(getNumberFromString(spans[index].textContent));
              }
            }

            const data = {
              name: name,
              time: time
            };

            // additional check for add chart !
            if (chart.getNumberCharts() < numberCharts) {
              chart.addUserToChart(data);
            } else {
              const checkbox = event.target;
              checkbox.checked = false;
            }
            
          } else {
            chart.removeUserFromChart(name);
          }
        }
      } else {
        const checkbox = event.target;
        checkbox.checked = false;
      }
    });
  }
}

export default addListenerForCheckbox;
