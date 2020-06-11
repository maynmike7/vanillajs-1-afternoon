// const rule = 'The house always wins!';
// console.log(rule)

const id = document.getElementById('idInput');
const color = document.getElementById('colorInput');
// console.log(id)
// console.log(color)

function setCard() {
    const card = document.getElementById(id.value)
    // console.log(card)
    card.style.color = color.value
}
// console.log(setCard)

