"use strict";

// Mobile navigation.
const menu = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
}
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  navigation.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);

// To add a program, add an HTML card with its data-category.
const filters = document.querySelectorAll('[data-filter]');
const programs = document.querySelectorAll('[data-category]');
filters.forEach(button => button.addEventListener('click', () => {
  filters.forEach(filter => {
    filter.classList.toggle('active', filter === button);
    filter.setAttribute('aria-pressed', String(filter === button));
  });
  let count = 0;
  programs.forEach(program => {
    program.hidden = button.dataset.filter !== 'all' && program.dataset.category !== button.dataset.filter;
    if (!program.hidden) count++;
  });
  document.querySelector('#filter-status').textContent = count + ' training programs shown.';
}));

// Membership selections flow into the enquiry builder.
document.querySelectorAll('[data-plan]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#interest').value = link.dataset.plan;
}));

// Local-only builder: no personal information is sent or stored.
const form = document.querySelector('#enquiry-form');
const status = document.querySelector('#form-status');
const enquiry = document.querySelector('#enquiry');
form.addEventListener('submit', event => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  if (!name) {
    form.elements.name.setCustomValidity('Please enter your name.');
    form.elements.name.reportValidity();
    return;
  }
  const message = form.elements.message.value.trim();
  enquiry.value = 'Hello Training Studio,\n\nMy name is ' + name + ". I'm interested in " + form.elements.interest.value.toLowerCase() + '.' + (message ? '\n\n' + message : '') + '\n\nPlease let me know the next steps.';
  document.querySelector('#result').hidden = false;
  status.textContent = 'Your enquiry is ready. Nothing has been sent.';
  enquiry.focus();
});
form.elements.name.addEventListener('input', () => form.elements.name.setCustomValidity(''));
document.querySelector('#copy').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(enquiry.value);
    status.textContent = 'Enquiry copied. Paste it into a message to the studio.';
  } catch {
    enquiry.focus();
    enquiry.select();
    status.textContent = "Copy the selected enquiry using your device's copy command.";
  }
});

// Filter schedule rows independently of the training program filters.
const dayFilters = document.querySelectorAll('[data-day]');
const classRows = document.querySelectorAll('[data-class-day]');
dayFilters.forEach(button => button.addEventListener('click', () => {
  dayFilters.forEach(filter => {
    filter.classList.toggle('active', filter === button);
    filter.setAttribute('aria-pressed', String(filter === button));
  });
  let count = 0;
  classRows.forEach(row => {
    row.hidden = button.dataset.day !== 'all' && row.dataset.classDay !== button.dataset.day;
    if (!row.hidden) count++;
  });
  document.querySelector('#schedule-empty').hidden = count !== 0;
  document.querySelector('#schedule-status').textContent = count + ' sample classes shown' + (button.dataset.day === 'all' ? ' for the week.' : ' for ' + button.dataset.day + '.');
}));

// Mark the last navigation section whose top has passed the sticky header.
// A scroll calculation keeps long and short sections equally predictable.
const sectionLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const trackedSections = sectionLinks.map(link => ({
  link, section: document.querySelector(link.getAttribute('href'))
})).filter(item => item.section);
let navigationFramePending = false;
function updateCurrentSection() {
  let current = null;
  const offset = document.querySelector('header').getBoundingClientRect().height + 50;
  trackedSections.forEach(item => {
    if (item.section.getBoundingClientRect().top <= offset) current = item.link;
  });
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
    current = trackedSections.at(-1)?.link;
  }
  sectionLinks.forEach(link => {
    if (link === current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  navigationFramePending = false;
}
function queueNavigationUpdate() {
  if (!navigationFramePending) {
    navigationFramePending = true;
    window.requestAnimationFrame(updateCurrentSection);
  }
}
window.addEventListener('scroll', queueNavigationUpdate, { passive: true });
window.addEventListener('resize', queueNavigationUpdate);
window.addEventListener('load', queueNavigationUpdate);
updateCurrentSection();
