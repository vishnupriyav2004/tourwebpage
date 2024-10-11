function loadHTML(elementId, file) {
    return fetch(file)
      .then(response => {
        console.log(`Loading ${file}:`, response); 
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      })
      .catch(error => console.error('Error loading HTML:', error));
  }
  


function initializeTestimonialSlider() {
    let currentIndex = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const totalTestimonials = testimonials.length;

   
    function showTestimonials(index) {
        testimonials.forEach(testimonial => testimonial.classList.remove('active'));

        
        testimonials[index].classList.add('active');
        testimonials[(index + 1) % totalTestimonials].classList.add('active');
    }

   
    document.querySelector('.arrow-right').addEventListener('click', function() {
        currentIndex = (currentIndex + 2) % totalTestimonials;
        showTestimonials(currentIndex);
    });

    
    document.querySelector('.arrow-left').addEventListener('click', function() {
        currentIndex = (currentIndex - 2 + totalTestimonials) % totalTestimonials;
        showTestimonials(currentIndex);
    });

    
    showTestimonials(currentIndex);
}


document.addEventListener("DOMContentLoaded", function () {
    
loadHTML('header-container', 'header1.html');
loadHTML('achieve-container', 'achieve1.html');
loadHTML('footer-container', 'footer1.html');
loadHTML('moto-container', 'moto.html');
loadHTML('review-container', 'review1.html').then(() => {
    initializeTestimonialSlider(); 
});
});
