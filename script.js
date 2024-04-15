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
  
    let tax = 0;
    if (income + extraIncome - deductions > 800000) {
      if (age === '<40') {
        tax = 0.3 * (income + extraIncome - deductions - 800000);
      } else if (age === '>=40&<60') {
        tax = 0.4 * (income + extraIncome - deductions - 800000);
      } else if (age === '>=60') {
        tax = 0.1 * (income + extraIncome - deductions - 800000);
      }
    }
  
    document.getElementById('taxResult').innerText = `Tax Amount: ${tax.toFixed(2)} Lakhs`;
    document.getElementById('modal').style.display = 'block';
  }
  
  document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('modal').style.display = 'none';
  });