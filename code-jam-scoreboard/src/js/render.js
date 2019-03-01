class Render {
  static async addSessions(sessionElements) {
    const sessions = document.getElementById('sessions');
    for (let i = 0; i < sessionElements.length; i++) {
      sessions.appendChild(sessionElements[i]);
    }
  }

  static async addTableTitle(titleElement) {
    const users = document.getElementById('users');
    users.appendChild(titleElement);
  }

  static async addTableElements(userElements) {
    const users = document.getElementById('users');
    for (let i = 0; i < userElements.length; i++) {
      users.appendChild(userElements[i]);
    }
  }
}

export default Render;
