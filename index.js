const cancelRingBtn = document.querySelector("#cancelRingBtn")

const ring = () => {
    cancelRingBtn.disabled = "disabled"
    document.querySelector(".alarm").classList.add("alarm--ring")
    document.body.addEventListener("click", () => { document.querySelector("audio").play() })
}

const cancelRing = () => {
    clearTimeout(timerId)
    cancelRingBtn.textContent = "Zvonění zrušeno"
    cancelRingBtn.disabled = "disabled"
}

const time = Number(prompt("Napište, za kolik vteřin má minutka začít zvonit:"))

const timerId = setTimeout(ring, time * 1000)    

cancelRingBtn.addEventListener("click", cancelRing)