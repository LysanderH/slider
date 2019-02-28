// const getSelectElt = document.querySelector('#bord-selection');
// let getOptionDataId = getSelectElt.value;
// const getImg = document.querySelectorAll('img');
//
//
// getSelectElt.addEventListener('change', () => {
//     getOptionDataId = getSelectElt.value;
//     console.log(getImg[0]);
//     console.log(getOptionDataId);
//     render();
// });
//
// function render() {
//     if (getOptionDataId === 'Board 1') {
//         getImg[0].classList.add('shown');
//         getImg[1].classList.remove('shown');
//         getImg[2].classList.remove('shown');
//         getImg[3].classList.remove('shown');
//     } else if (getOptionDataId === 'Board 2') {
//         getImg[0].classList.remove('shown');
//         getImg[1].classList.add('shown');
//         getImg[2].classList.remove('shown');
//         getImg[3].classList.remove('shown');
//     } else if (getOptionDataId === 'Board 3') {
//         getImg[0].classList.remove('shown');
//         getImg[1].classList.remove('shown');
//         getImg[2].classList.add('shown');
//         getImg[3].classList.remove('shown');
//     } else if (getOptionDataId === 'Board 4') {
//         getImg[0].classList.remove('shown');
//         getImg[1].classList.remove('shown');
//         getImg[2].classList.remove('shown');
//         getImg[3].classList.add('shown');
//     }
//
// }
//
// render();
//

const getSelectElt = document.querySelector('#bord-selection');
let getOptionDataId = getSelectElt.selectedIndex;
const getImg = document.querySelector('img');

getSelectElt.addEventListener('change', (e) => {
    e.preventDefault();
    getOptionDataId = getSelectElt.selectedIndex;
    // getImg.classList.add('');
    getImg.src = './img/schach' + (getOptionDataId + 1) + '.jpg';
});
function removeClass() {
    // getImg.classList.remove('');
}



