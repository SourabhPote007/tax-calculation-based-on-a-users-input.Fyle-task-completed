document.getElementById('taxForm').addEventListener('submit', function(e) {
  e.preventDefault();
  calculateTax();
});

document.querySelectorAll('.error-icon').forEach(function(icon) {
  icon.addEventListener('mouseover', function() {
    alert(icon.dataset.error);
  });
});

document.getElementById('age').addEventListener('change', function() {
  document.getElementById('ageError').style.display = 'none';
});

function calculateTax() {
  const age = document.getElementById('age').value;
  const income = parseFloat(document.getElementById('income').value) || 0;
  const extraIncome = parseFloat(document.getElementById('extraIncome').value) || 0;
  const deductions = parseFloat(document.getElementById('deductions').value) || 0;

  const overallIncome = income + extraIncome - deductions;

  let tax = 0;
  if (overallIncome > 100000) {
    if (age === '<40') {
      tax = 0.3 * (overallIncome - 100000);
    } else if (age === '>=40&<60') {
      tax = 0.4 * (overallIncome - 100000);
    } else if (age === '>=60') {
      tax = 0.1 * (overallIncome - 100000);
    }
  }

  const taxAmount = tax.toFixed(2);
  const taxResultElement = document.getElementById('taxResult');
  taxResultElement.innerHTML = `${taxAmount}`;
  
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
}

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});
