document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    const f = btn.dataset.filter;
    document.querySelectorAll('.product').forEach(p => {
      p.style.display = (f === 'all' || p.dataset.type === f) ? 'block' : 'none';
    });
  });
});
document.getElementById('themeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
document.getElementById('enquiryForm').addEventListener('submit', e => {
  e.preventDefault();
  const phone = document.getElementById('phone').value;
  const status = document.getElementById('status');
  if (!/^\d{10}$/.test(phone)) {
    status.textContent = 'Enter a valid 10-digit phone number.';
    return;
  }
  status.textContent = 'Thank you! The artisan will contact you soon.';
  e.target.reset();
});