"use strict";

/* open document view modal (index.html) */

function showDocument(target) {
  document.getElementById('modalImage').src = `img/${target.id}.jpg`;
  document.getElementById('modal').style.display = 'flex';
}

/* close document view modal (index.html) */

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

/* toggle vacancy description dropdown function on button click (jobs.html) */

function showDescription(target) {
  target.classList.toggle('button--active');
  target.nextElementSibling.classList.toggle('job-papper--open');
}

/* close description dropdown on click inside (jobs.html) */

function closeDescription(target) {
  target.classList.remove('job-papper--open');
  target.previousElementSibling.classList.remove('button--active');
}

