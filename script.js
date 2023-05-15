const searchForm = document.getElementById('search-form');
const resultsContainer = document.getElementById('results');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const animalType = document.getElementById('animal-type').ariaValueMax;
    fetchAnimals(animalType);
});

function fetchAnimals(animalType) {
    resultsContainer.innerHTML = '';

    fetch('https://api.adoptapet.com/search/pets_at_shelters?') {
        
        }
    }
