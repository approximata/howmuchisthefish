
const wrapper = document.querySelector('.fish-wrapper');
const generate = document.querySelector('.generate');


const clearFish = () => {
    const theFishes = document.querySelectorAll('.fish-class');
    theFishes && theFishes.forEach(element => (
        element.parentNode.removeChild(element)
    ))
}

const calculateFishes = (amount) => {
    if (amount >= 50) {
        const bigPonty = Math.floor(amount / 50);
        const leftOver = amount % 50;
        const smallPonty =  Math.floor(leftOver / 5);
        return {bigPonty, smallPonty}
    }
    return { smallPonty: Math.floor(amount / 5)};
}

const drawFish = () => 
{
    clearFish();
    const input = document.querySelector('.number-of-fish');
    const amount = calculateFishes(Number(input.value));
    
    if(amount.bigPonty > 0) {
        const bigFishAmount = document.createElement('div');
        bigFishAmount.classList.add('amount-of-fish');
        const textnode = document.createTextNode(`Big ponty: ${amount.bigPonty}`);
        bigFishAmount.appendChild(textnode);
        wrapper.appendChild(bigFishAmount);
        for (let index = 0; index < amount.bigPonty; index++) {
            const oneFish = document.createElement("IMG"); 
            oneFish.classList.add('fish-class');
            oneFish.classList.add('big');
            wrapper.appendChild(oneFish);
            oneFish.src = 'fish.jpeg';
            oneFish.height = '75';
            oneFish.width='150';
            setTimeout(()=>{}, 200);
        }
    }

    const smallFishAmount = document.createElement('div');
        smallFishAmount.classList.add('amount-of-fish');
        const textnode = document.createTextNode(`Small ponty: ${amount.smallPonty}`);
        smallFishAmount.appendChild(textnode);
        wrapper.appendChild(smallFishAmount);

    for (let index = 0; index < amount.smallPonty; index++) {
        const oneFish = document.createElement("IMG"); 
        oneFish.classList.add('fish-class');
        oneFish.classList.add('small');
        wrapper.appendChild(oneFish);
        oneFish.src = 'fish.jpeg';
        oneFish.height = '37';
        oneFish.width='75';
        setTimeout(()=>{}, 200);
    }
}

generate.addEventListener("click", drawFish);

console.log('loaded')
