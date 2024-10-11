
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


function reverseDestinations() {
    alert('Button clicked!'); 
     
}


function initializeDestinationsSlider() {
    
    document.querySelector('.left').addEventListener('click', reverseDestinations);
    document.querySelector('.right').addEventListener('click', reverseDestinations);
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


function switchTab(tab) {
    const publicTab = document.getElementById('public-tab');
    const privateTab = document.getElementById('private-tab');

    if (tab === 'private') {
        publicTab.classList.remove('active');
        privateTab.classList.add('active');

       
        document.querySelector('.tour-group').style.display = 'block';
        document.querySelector('.date-group').style.display = 'block';
        document.querySelector('.transport-group').style.display = 'block';
    } else {
        privateTab.classList.remove('active');
        publicTab.classList.add('active');

        document.querySelector('.tour-group').style.display = 'none';
        document.querySelector('.date-group').style.display = 'none';
        document.querySelector('.transport-group').style.display = 'none';
    }
}


document.addEventListener("DOMContentLoaded", function () {
   
    loadHTML('header-container', 'header.html');
    loadHTML('destinations-container', 'popular-destinations.html').then(() => {
        initializeDestinationsSlider(); 
    });
    loadHTML('achieve-container', 'achieve.html');
    loadHTML('footer-container', 'footer.html');
    loadHTML('offer-container', 'offer.html');
    loadHTML('services-container', 'service.html');
    loadHTML('popularpackages-container', 'popular-packages.html');
    loadHTML('book-container', 'bookabike.html');

    
    loadHTML('review-container', 'review.html').then(() => {
        initializeTestimonialSlider(); 
    });
});
