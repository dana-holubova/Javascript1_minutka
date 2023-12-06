console.log('funguju!');

const ring = () => {
    document.querySelector(".alarm").classList.add("alarm--ring")
}

setTimeout(ring, prompt("Napište, za kolik vteřin má budík začít zvonit:") * 1000)