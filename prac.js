const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerText = year;

const addBtn = document.getElementById('addYear');
const removeBtn = document.getElementById('removeYear');
const sortBtn = document.getElementById('sortYear');
const clearBtn = document.getElementById('clearYear');
const yearInput = document.getElementById('yearInput');
const message = document.getElementById('message');
const yearsTable = document.getElementById('yearsTable');
const yearsTbody = yearsTable.querySelector('tbody');
const countYears = document.getElementById('countYears');

let years = [];
const currentYear = new Date().getFullYear();

function showMessage(text, type = 'success') {
  message.textContent = text;
  message.className = type;
  // Fade out after 3 seconds
  setTimeout(() => {
    message.style.opacity = '0';
  }, 2800);
  message.style.opacity = '1';
}

function updateDisplay() {
  yearsTbody.innerHTML = '';

  if (years.length === 0) {
    yearsTable.style.display = 'none';
    countYears.textContent = '';
    return;
  }

  yearsTable.style.display = 'table';

  years.forEach((year, index) => {
    const tr = document.createElement('tr');

    const tdYear = document.createElement('td');
    tdYear.textContent = year;
    tr.appendChild(tdYear);

    const tdRemove = document.createElement('td');
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '❌';
    removeBtn.className = 'removeYearBtn';
    removeBtn.title = `Remove year ${year}`;
    removeBtn.addEventListener('click', () => {
      years.splice(index, 1);
      updateDisplay();
      showMessage(`Year ${year} removed.`, 'success');
    });
    tdRemove.appendChild(removeBtn);
    tr.appendChild(tdRemove);

    yearsTbody.appendChild(tr);
  });

  countYears.textContent = `Total years: ${years.length}`;
}

addBtn.addEventListener('click', () => {
  const year = yearInput.value.trim();

  if (!year) {
    showMessage('Please enter a year.', 'error');
    return;
  }
  if (!/^\d{4}$/.test(year)) {
    showMessage('Please enter a valid 4-digit year.', 'error');
    return;
  }
  const yearNum = parseInt(year, 10);
  if (yearNum < 1900 || yearNum > currentYear) {
    showMessage(`Please enter a year between 1900 and ${currentYear}.`, 'error');
    return;
  }
  if (years.includes(year)) {
    showMessage('This year is already in the list.', 'error');
    return;
  }

  years.push(year);
  yearInput.value = '';
  updateDisplay();
  showMessage(`Year ${year} added!`, 'success');
});

removeBtn.addEventListener('click', () => {
  if (years.length === 0) {
    showMessage('No years to remove.', 'error');
    return;
  }
  const removedYear = years.pop();
  updateDisplay();
  showMessage(`Last year ${removedYear} removed.`, 'success');
});

sortBtn.addEventListener('click', () => {
  if (years.length === 0) {
    showMessage('No years to sort.', 'error');
    return;
  }
  years.sort((a, b) => a - b);
  updateDisplay();
  showMessage('Years sorted!', 'success');
});

clearBtn.addEventListener('click', () => {
  if (years.length === 0) {
    showMessage('No years to clear.', 'error');
    return;
  }
  if (confirm('Are you sure you want to clear all years?')) {
    years = [];
    updateDisplay();
    showMessage('All years cleared.', 'success');
  }
});

// Allow Enter key to add year
yearInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
