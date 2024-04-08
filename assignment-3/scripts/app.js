'use strict';

import movies from './movies.js';

const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');
const modalContainer = document.getElementById('modal-container');
const modalContent = document.getElementById('modal-content');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm));
    displaySuggestions(filteredMovies);
});

function displaySuggestions(movies) {
    suggestionsContainer.innerHTML = '';
    movies.forEach(movie => {
        const suggestionElement = document.createElement('div');
        suggestionElement.textContent = movie.title;
        suggestionElement.classList.add('suggestion');
        suggestionElement.addEventListener('click', event => {
            event.preventDefault(); // Prevent default navigation behavior
            displayMovieModal(movie);
        });
        suggestionsContainer.appendChild(suggestionElement);
    });
}

function displayMovieModal(movie) {
    modalContent.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Year: ${movie.year}</p>
        <p>Running Time: ${movie.runningTime}</p>
        <p>Description: ${movie.description}</p>
        <img src="${movie.poster}" alt="${movie.title}" style="max-width: 100%;">
    `;
    modalContainer.style.display = 'flex';
}

const closeButton = document.getElementById('close-btn');
closeButton.addEventListener('click', () => {
    modalContainer.style.display = 'none';
});

// Close modal when clicking outside the modal content
modalContainer.addEventListener('click', event => {
    if (event.target === modalContainer) {
        modalContainer.style.display = 'none';
    }
});


