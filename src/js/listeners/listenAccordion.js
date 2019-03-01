function addListenerForAccordion() {
  const acc = document.getElementsByClassName('accordion');

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener('click', function() {
      this.classList.toggle('active');

      let sessions = this.nextElementSibling;
      if (sessions.style.maxHeight) {
        sessions.style.maxHeight = null;
      } else {
        sessions.style.maxHeight = sessions.scrollHeight + 'px';
      }
    });
  }
}

export default addListenerForAccordion;
