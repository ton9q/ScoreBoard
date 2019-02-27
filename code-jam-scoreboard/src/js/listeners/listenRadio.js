function addListenerForRadio() {
  const sessions = [...document.getElementById('sessions').children];
  sessions.forEach(session => {
    session.addEventListener('click', () => {
      sessions.forEach(item => {
        const input = item.getElementsByTagName('input')[0];
        if (item === session) {
          input.checked = true;
        } else {
          input.checked = false;
        }
      });
    });
  });
}

export default addListenerForRadio;
