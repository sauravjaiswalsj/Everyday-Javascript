document.title="Color Fliper";
const stop = document.querySelector('button');
const main = document.querySelector('main');
const changeColor = (e)=>{
    const text = document.querySelector('#colorCode');
    const colorCode =  `rgb( ${e.offsetX}, ${e.offsetY},${e.    offsetX%e.offsetY})`;
   text.innerHTML= colorCode;
    main.style.background= colorCode;
}

main.addEventListener('mouseover', changeColor);

const stopChangingColor = (e)=>{
    main.style.background ="transparent";
}
stop.addEventListener('click', stopChangingColor)