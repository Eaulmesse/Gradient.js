let firstColor = document.querySelector('#first-color');
let secondColor = document.querySelector('#second-color');

let orientationText = document.querySelector('#degree');
let orientationRange = document.querySelector('#orientation');

let copyButton = document.querySelector('#button-copy');
let randomButton = document.querySelector('#button-random');

document.body.style.background = `linear-gradient(${orientationRange.value}deg, ${firstColor.value}, ${secondColor.value})`;
orientationText.innerText = `${orientationRange.value}°`;

firstColor.addEventListener('change', () => {
    document.body.style.background = `linear-gradient(${orientationRange.value}deg, ${firstColor.value}, ${secondColor.value})`;
})

secondColor.addEventListener('change', () => {
    document.body.style.background = `linear-gradient(${orientationRange.value}deg, ${firstColor.value}, ${secondColor.value})`;
})

orientationRange.addEventListener('change', () => {
    document.body.style.background = `linear-gradient(${orientationRange.value}deg, ${firstColor.value}, ${secondColor.value})`;
    orientationText.innerText = `${orientationRange.value}°`;
})

copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(document.body.style.background);
})

randomButton.addEventListener('click', () => {
    let firstRandomColor = Math.floor(Math.random()*16777215).toString(16);
    let secondRandomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.background = `linear-gradient(${orientationRange.value}deg, #${firstRandomColor}, #${secondRandomColor})`;
})




