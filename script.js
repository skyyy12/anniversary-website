let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const questionContainer = document.querySelector('.question-container');
const totalSlides = slides.length;

// Delay slideshow start until after title fades in
setTimeout(() => {
    showSlides();
}, 3000); // Wait 3 seconds for the title to fade in

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > totalSlides) {
        slideIndex = 1;
        questionContainer.style.display = 'block'; // Show the question after all slides
    }
    slides[slideIndex - 1].style.display = 'block'; // Show the current slide

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function handleResponse(response) {
    const lovePhoto = 'love-photo.jpg';
    const pigPhoto = 'pig-photo.jpg';
    const message = response === 'yes' ? "我愛你!" : "不！？你永遠會像豬一樣 :(";

    document.querySelector('.slideshow-container').innerHTML = `
        <img src="${response === 'yes' ? lovePhoto : pigPhoto}" alt="${message}" style="display: block; margin: 0 auto; max-width: 80%;">
        <p class="text">${message}</p>
    `;
}
