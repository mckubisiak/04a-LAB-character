// import functions and grab DOM elements
const colorPick = document.getElementById('color-pick');
const sizePick = document.getElementById('size');
const invisPick = document.getElementById('invisibilty');
const shieldPick = document.getElementById('shield');
const characterPick = document.getElementById('create-button');
const characterImage = document.getElementById('character');


// initialize state

/*console.log (colorPick);
console.log (sizePick);
console.log (invisPick);
console.log (shieldPick);
console.log (characterPick);*/
console.log (characterImage);

// set event listeners to update state and DOM

characterPick.addEventListener('click', () => {
    characterImage.style.backgroundColor = colorPick.value;
    characterImage.style.opacity = invisPick.value;
    characterImage.style.borderWidth = shieldPick.value;
    characterImage.src = sizePick.value ;
});
