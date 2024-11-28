const avatarInput = document.getElementById('avatar-input');
const avatarpreview = document.querySelector('.avatar-preview');

avatarInput.addEventListener('change', function() {
    if (avatarInput.files && avatarInput.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            avatarpreview.src = e.target.result;
        }

        reader.readAsDataURL(avatarInput.files[0]);
    }
});

const uploadButton = document.getElementById('upload-btn');

uploadButton.addEventListener('click', function() {
    avatarInput.click();
});

const locationInput = document.getElementById('location-input');
const preExistingLocations = document.querySelector('.pre-existing-locations');

locationInput.addEventListener('input', function() {
    const searchTerm = locationInput.value.trim().toLowerCase();
    
    preExistingLocations.style.display = searchTerm.length > 0 ? 'block' : 'none';

    preExistingLocations.querySelectorAll('option').forEach(option => {
        const locationName = option.textContent.toLowerCase();
        if (locationName.includes(searchTerm)) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});

preExistingLocations.addEventListener('click', function(event) {
    if (event.target.tagName === 'OPTION') {
        locationInput.value = event.target.textContent.trim();
        preExistingLocations.style.display = 'none';
        locationInput.focus();
    }
});

locationInput.addEventListener('click', function() {
    locationInput.focus();
});

const nextButton = document.getElementById('next-btn');

nextButton.addEventListener('click', function() {
    window.location.href = 'Ask.html';
});
