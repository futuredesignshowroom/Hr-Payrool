// Utility functions
function showModal(modalId) {
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.show();
}

function hideModal(modalId) {
  const modal = new bootstrap.Modal(document.getElementById(modalId));
  modal.hide();
}

function showElement(selector) {
  document.querySelector(selector).style.display = 'block';
}

function hideElement(selector) {
  document.querySelector(selector).style.display = 'none';
}

function formatCurrency(amount) {
  return `Rs. ${amount}`;
}

function calculateDaysWorked(attendanceLogs, employeeId, month) {
  let days = 0;
  if (attendanceLogs) {
    Object.keys(attendanceLogs).forEach(date => {
      if (date.startsWith(month) && attendanceLogs[date][employeeId]) {
        days++;
      }
    });
  }
  return days;
}

export { showModal, hideModal, showElement, hideElement, formatCurrency, calculateDaysWorked };