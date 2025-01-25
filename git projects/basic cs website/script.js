const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const overlay = document.getElementById('overlay');
const hero = document.getElementById('heroh1')

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

if(navToggle==active){
hero.style.display = 'block';
} else {
    hero.style.display = 'block';
    

}

overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});


    

        

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'YOUR_TRACKING_ID');





