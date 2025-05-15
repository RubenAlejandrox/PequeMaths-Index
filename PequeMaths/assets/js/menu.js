document.querySelector('.mobile-menu-button').addEventListener('click', function() {
  const nav = document.querySelector('nav ul');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  
  if (nav.style.display === 'flex') {
    nav.style.position = 'absolute';
    nav.style.flexDirection = 'column';
    nav.style.backgroundColor = 'var(--azul-cielo)';
    nav.style.top = '60px';
    nav.style.right = '20px';
    nav.style.padding = '20px';
    nav.style.borderRadius = '10px';
    nav.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
  }
});
