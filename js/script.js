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