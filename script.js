
const langBtn = document.getElementById('lang-btn');
let isTelugu = false;

langBtn.addEventListener('click', () => {
    isTelugu = !isTelugu;
    const titles = document.querySelectorAll('[id^=title], [id$=title]');
    const texts = document.querySelectorAll('[id$=text]');
    
    if(isTelugu){
        titles.forEach(t => t.innerText = t.innerText + ' (తెలుగు)');
        texts.forEach(t => t.innerText = t.innerText + ' (తెలుగు)');
        langBtn.innerText = 'English';
    } else {
        titles.forEach(t => t.innerText = t.innerText.replace(' (తెలుగు)',''));
        texts.forEach(t => t.innerText = t.innerText.replace(' (తెలుగు)',''));
        langBtn.innerText = 'తెలుగు';
    }
});
