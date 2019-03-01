class Creator {
  static async createSessionElements(sessionsData) {
    const sessionElements = [];

    for(let i = 0; i < sessionsData.length; i++) {
      const sessionInner = 
        `<input type="radio" id="session-${i+1}" ${i === 0 ? "checked" : ""}>` +
        `<label for="$session-${i+1}">Session ${i+1} - ${sessionsData[i].alias}</label>`
      ;

      const sessionElement = document.createElement('div');
      sessionElement.className = 'session';
      sessionElement.innerHTML = sessionInner;

      sessionElements.push(sessionElement);
    }

    return sessionElements;
  }

  static async createTableTitleElement(sessionData) {
    let namesElements = '';

    for(let j = 0; j < sessionData.puzzles.length; j++) {
      namesElements += `<th class="title-${j+1}"><span>${sessionData.puzzles[j].name}</span</th>`
    }

    const titleInner = 
      '<th></th>' +
      `<th class="name"><span>Display Name</span></th>` +
      namesElements +
      '<th class="name"><span>Total Time</span></th>'
    ;

    const titleElement = document.createElement('tr');
    titleElement.className = 'title';
    titleElement.id = 'table__header';
    titleElement.innerHTML = titleInner;

    return titleElement;
  }

  static async createTableElements(sessionData, usersData) {
    const userElements = [];

    for(let i = 0; i < usersData.length; i++) {
      const uid = usersData[i].uid;
      const times = [];
      const code = [];

      for(let j = 0; j < sessionData.rounds.length; j++) {
        let haveSolution = false;
        const solutions = sessionData.rounds[j].solutions;

        for (var key in solutions) {
          if (uid == key) {
            if (solutions[key].correct == 'Correct') {
              times.push(solutions[key].time.$numberLong);
              code.push(solutions[key].code);
            } else {
              times.push('150');
              code.push('no solution');
            }
            haveSolution = true;
          }
        }
        
        if (!haveSolution) {
          times.push('150');
          code.push('no solution')
        } 
      }

      let totalTime = 0;
      for (let time of times) {
        totalTime += Number(time);
      }
      times.push(totalTime);

      let timesElements = '';
      for(let i = 0; i < times.length; i++) {
        if (i !== times.length - 1) {
          timesElements += `
          <td class="solution-${i+1}">
            <span class="tooltip">${times[i]}
              <span class="tooltiptext">${code[i]}</span>
            </span>
          </td>
          `;
        } else {
          timesElements += `
          <td class="solution-${i+1}">
            <span>${times[i]}</span>
          </td>
          `;
        }

      }

      const userInner = 
        '<td><input type="checkbox"></td>' +
        `<td class="name"><span>${usersData[i].displayName}</span></td>` +
        timesElements
      ;

      const userElement = document.createElement('tr');
      userElement.className = 'user';
      userElement.innerHTML = userInner;

      userElements.push(userElement);
    }

    return userElements;
  }
}

export default Creator;