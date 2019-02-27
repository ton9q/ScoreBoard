import ListenRadio from './js/listeners/listenRadio.js';
import ListenCheckbox from './js/listeners/listenCheckbox.js';
import ListenAccordion from './js/listeners/listenAccordion.js';
import ListenerForTable from './js/listeners/listenTable.js';

import LoadFavicon from './js/favicon.js';

import Creator from './js/creator.js';
import Render from './js/render.js';
import Chart from './js/chart.js';

require('./css/style.css');

const sessionsData = require('../data/sessions.json');
const usersData = require('../data/users.json');

console.log(sessionsData);
// console.log(usersData);

async function renderContent() {
  const chart = new Chart(sessionsData[0]);
  chart.createChart();

  const sessionElements = await Creator.createSessionElements(sessionsData);
  Render.addSessions(sessionElements);

  const titleElement = await Creator.createTableTitleElement(sessionsData[0]);
  Render.addTableTitle(titleElement);

  const userElements = await Creator.createTableElements(sessionsData[0], usersData);
  Render.addTableElements(userElements);

  LoadFavicon();
  ListenRadio();
  ListenCheckbox(chart);
  ListenAccordion();
  ListenerForTable.listenScrollX();
  ListenerForTable.listenScrollY();
}

renderContent();
