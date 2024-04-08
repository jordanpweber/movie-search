'use strict';

import User from './user.js';

function displayUserInfo(user) {
    const modal = document.getElementById('modal');
    const userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerText = user.getInfo();
    modal.style.display = 'block';

    const closeButton = document.getElementById('close');
    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

document.getElementById('post-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const postText = document.getElementById('post-text').value;
    const imageFile = document.getElementById('image-upload').files[0];

    const postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <div class="post-header">
            <img src="profile-pic.jpg" alt="Profile Picture">
            <div class="post-info">
                <span class="user-name">John Doe</span>
                <span class="post-date">${new Date().toLocaleString()}</span>
            </div>
        </div>
        <p class="post-content">${postText}</p>
    `;

    if (imageFile) {
        const imageUrl = URL.createObjectURL(imageFile);
        const imageElement = document.createElement('img');
        imageElement.classList.add('post-image');
        imageElement.src = imageUrl;
        postElement.appendChild(imageElement);
    }

    const postsSection = document.getElementById('posts');
    postsSection.appendChild(postElement);

    document.getElementById('post-text').value = '';
    document.getElementById('image-upload').value = '';
});

document.getElementById('profile-button').addEventListener('click', () => {
    const user = new User(1, 'John Doe', 'john_doe', 'john@example.com');
    displayUserInfo(user);
});

document.getElementById('image-upload-button').addEventListener('click', () => {
    document.getElementById('image-upload').click(); // Trigger file input click event
});

