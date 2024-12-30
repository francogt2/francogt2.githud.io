document.addEventListener('DOMContentLoaded', function () {
  const reviewsContainer = document.getElementById('reviews-container');

  function displayReviews() {
    reviewsContainer.innerHTML = ''; 
    reviews.forEach(review => {
      const reviewCard = document.createElement('article');
      reviewCard.classList.add('review-card');

      reviewCard.innerHTML = `
        <h3 class="review-name">${review.name}</h3>
        <p class="review-message">${review.comment}</p>
      `;

      reviewsContainer.appendChild(reviewCard);
    });
  }

  displayReviews(); 
});
