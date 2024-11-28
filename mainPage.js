function displayImage(event) {
    var image = document.getElementById('uploaded-image');
    image.src = URL.createObjectURL(event.target.files[0]);
}

document.querySelector('.profile-upload-btn').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

const galleryGrid = document.getElementById("community-gallery-grid");
const uploadForm = document.getElementById("upload-form");

function previewArtwork(event) {
    const file = event.target.files[0];
    const previewArea = document.getElementById("preview-area");
    previewArea.innerHTML = "";

    if (file) {
        const fileType = file.type;

        if (fileType.startsWith("image/")) {
            const img = document.createElement("img");
            img.src = URL.createObjectURL(file);
            img.style.maxWidth = "100%";
            img.style.borderRadius = "10px";
            previewArea.appendChild(img);
        } else if (fileType.startsWith("video/")) {
            const video = document.createElement("video");
            video.src = URL.createObjectURL(file);
            video.controls = true;
            video.style.maxWidth = "100%";
            video.style.borderRadius = "10px";
            previewArea.appendChild(video);
        } else {
            previewArea.innerHTML = "<p>Unsupported file format. Please upload an image or video.</p>";
        }
    }
}

uploadForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.getElementById("artwork-title").value;
    const description = document.getElementById("artwork-description").value;
    const fileInput = document.getElementById("artwork-upload");
    const file = fileInput.files[0];

    if (!file) {
        alert("Please upload an artwork.");
        return;
    }

    const card = document.createElement("div");
    card.className = "card";

    if (file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        card.appendChild(img);
    } else if (file.type.startsWith("video/")) {
        const video = document.createElement("video");
        video.src = URL.createObjectURL(file);
        video.controls = true;
        video.loop = true;
        video.muted = true;
        card.appendChild(video);
    }
    const titleElem = document.createElement("h3");
    titleElem.textContent = title;
    const descElem = document.createElement("p");
    descElem.textContent = description;

    card.appendChild(titleElem);
    card.appendChild(descElem);

    galleryGrid.appendChild(card);


    uploadForm.reset();
    document.getElementById("preview-area").innerHTML = "<p>No artwork uploaded yet.</p>";
});



