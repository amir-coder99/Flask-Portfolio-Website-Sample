document.addEventListener('DOMContentLoaded', function(){
  // nav toggle
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  navToggle && navToggle.addEventListener('click', ()=> navLinks.classList.toggle('show'));

  // smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const revealOnScroll = function(){
    for(const el of reveals){
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){ el.classList.add('visible'); }
    }
  };
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // animate skill bars when visible
  const fills = document.querySelectorAll('.fill');
  const animateFills = function(){
    for(const f of fills){
      const rect = f.getBoundingClientRect();
      if(rect.top < window.innerHeight - 80){
        const pct = f.style.getPropertyValue('--pct') || '80%';
        f.style.width = pct;
      }
    }
  };
  animateFills();
  window.addEventListener('scroll', animateFills);
});
