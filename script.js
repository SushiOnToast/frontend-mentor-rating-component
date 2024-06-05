let ratingList = [];
let selectedRating = '';

function selectRating(clicked) {
    selectedRating = document.querySelector(`#${clicked}`)
    ratingList.forEach((item) => {
        if (item.id == selectedRating.id) {
            item.classList.add('selected'); // separate css style for selected
        } else {
            item.classList.remove('selected');
        }
    })
}

function submitResults() {
    if (selectedRating == '') {
        alert('Please select a rating!');
    } else {
        document.querySelector('#selection-screen').remove(); // removed rating screen
        document.querySelector('#thank-you-screen').style.display = 'flex'; // displays thank you message
        document.querySelector('#selection-result').textContent = `You selected ${selectedRating.id.slice(-1)} out of 5`;
    }
}

function onLoad() { // runs code after loading html to prevent errors
    ratingList = document.querySelectorAll('.rating');
}

document.addEventListener('DOMContentLoaded', onLoad);