/* assets/js/matrix.js */
(function(){
  // Matrix effect
  const canvas = document.getElementById('matrix-canvas');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = innerWidth;
  let h = canvas.height = innerHeight;
  const fontSize = 16;
  const columns = Math.floor(w / fontSize) + 1;
  const drops = new Array(columns).fill(0);

  const chars = ['0','1'];
  function draw(){
    ctx.fillStyle = 'rgba(5,10,15,0.15)';
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = 'rgba(0,208,132,0.9)';
    ctx.font = fontSize + 'px monospace';
    for(let i=0;i<drops.length;i++){
      const x = i * fontSize;
      const text = chars[Math.floor(Math.random()*chars.length)];
      ctx.fillText(text, x, drops[i]*fontSize);
      if(drops[i]*fontSize > h && Math.random() > 0.975) drops[i]=0;
      drops[i]++;
    }
  }
  let loop = setInterval(draw, 45);
  addEventListener('resize', ()=>{
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;
  });

  // Simple active nav link based on filename
  document.addEventListener('DOMContentLoaded', ()=>{
    try{
      const links = document.querySelectorAll('.nav-links a');
      const path = location.pathname.split('/').pop() || 'index.html';
      links.forEach(a=>{
        if(a.getAttribute('href') === path) a.classList.add('active');
      });
    }catch(e){}
  });
})();