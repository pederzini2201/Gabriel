const contagem = 6;
const hr = document.querySelector('#hr');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');
setInterval(() => {
    const date = new Date();
    const hh = date.getHours() * 30;
    const mm = date.getMinutes() * contagem;
    const ss = date.getSeconds() * contagem;
    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;})