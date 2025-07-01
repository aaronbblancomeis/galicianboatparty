  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const icon = btn.querySelector('.icon');
      const isOpen = answer.style.maxHeight;

      // Cierra todos
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.style.maxHeight = null;
        a.style.paddingTop = '0';
        a.style.paddingBottom = '0';
      });

      document.querySelectorAll('.faq-question .icon').forEach(i => {
        i.textContent = '+';
      });

      // Abre actual si estaba cerrado
      if (!isOpen || isOpen === '0px') {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.textContent = '−';
      }
    });
  });