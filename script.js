const button = document.querySelector("#calculate-fish");

const calculateNetAmount = (gross) => Math.floor((gross / 127) * 100);

const fishMap = {
    smallFish: 5,
    bigFish: 50,
}

const calculateFish = (net) => {
    let bigFishAmount = 0;
    let smallFishAmount = 0;
    if (net >= fishMap.bigFish) {
        bigFishAmount = Math.floor(net / fishMap.bigFish);
        net -= bigFishAmount * fishMap.bigFish;
    }
    smallFishAmount = Math.floor(net / fishMap.smallFish);

    return {bigFishAmount, smallFishAmount}
}

const showValue = (domClass, value) => {
    document.querySelector(`.${domClass}`).textContent = value;
}

const renderFish = (fishes) => {
    const render = (amount, pic, parentClass, size) => {
        const wrapper = document.querySelector(`.${parentClass}`);
        while (wrapper.firstChild) {
            wrapper.removeChild(wrapper.firstChild);
        }
        for (let i = 0; i < amount; i++) {
            const img = document.createElement("img");
            img.src = `./${pic}`;
            img.height = size/2
            img.width = size
            wrapper.appendChild(img)
        }
    }
    render(fishes.bigFishAmount, 'bigponty.jpeg', 'bigfish-pic', 200);
    render(fishes.smallFishAmount, 'kisponty.jpg', 'smallfish-pic', 100);
}


const clickCalcualet = () => {
    const gross = document.querySelector('#gross-amount').value;
    const net = calculateNetAmount(gross);
    const fishes = calculateFish(net);
    showValue('net-amount', net);
    showValue('bigfish-amount', fishes.bigFishAmount);
    showValue('smallfish-amount', fishes.smallFishAmount);
    renderFish(fishes);
}

button.addEventListener('click', clickCalcualet)


