const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; //clearing the container
    for (let i = 0; i<maxPaletteBoxes; i++) {
        //generating a random hex colour code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, "0")}`;

        const color = document.createElement("li");
        color.classList.add("color");
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        //adding click event to current li element to copy color
        color.addEventListener("click", () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();
const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector(".hex-value");
    //copying hex value, updating the text to 'Copied!'
    //and changing text back to original hex value after 1s
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = "Copied!" ;
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert("Failed to copy colour code!")); //showing alert if colour cannot be copied.
}
refreshBtn.addEventListener("click", generatePalette);