
const wrapper = document.querySelector('.fish-wrapper');
const generate = document.querySelector('.generate');




const clearFish = () => {
    const theFishes = document.querySelectorAll('.fish-class');
    theFishes && theFishes.forEach(element => (
        element.parentNode.removeChild(element)
    ))
}

const drawFish = () => 
{
    clearFish();
    const input = document.querySelector('.number-of-fish');
    const numberOfFish = Number(input.value);
    for (let index = 0; index < numberOfFish; index++) {
        const oneFish = document.createElement("IMG"); 
        oneFish.classList.add('fish-class')
        wrapper.appendChild(oneFish);
        oneFish.src = 'fish.jpeg';
        oneFish.height = '75';
        oneFish.width='150';
        setTimeout(()=>{}, 200);
    }
}

generate.addEventListener("click", drawFish);

console.log('loaded')
