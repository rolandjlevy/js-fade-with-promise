function fade(div, speed){
  let opacity = 1;
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      div.style.opacity = opacity;
      opacity -= 0.01;
      if (opacity <= 0) {
        clearInterval(timer);
        resolve();
      }
    }, speed);
  });
}

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

const delay = (t) => new Promise(resolve => setTimeout(resolve, t));

$$('.block').forEach(item => {
  item.addEventListener('click', async (e) => {
    const speed = Number(item.dataset.speed);
    console.log('Fade begin');
    await fade(item, speed);
    console.log('Fade complete');
  });
});