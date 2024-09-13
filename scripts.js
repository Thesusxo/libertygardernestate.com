// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Optional: Add animations when elements come into view
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

// Attach observer to sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize Google Map
function initMap() {
    var location = { lat: 34.0522, lng: -118.2437 }; // Example: Los Angeles coordinates
    var map = new google.maps.Map(document.getElementById('map-container'), {
        zoom: 12,
        center: location,
        styles: [ // Optional styling for the map
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#e9e9e9" }]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{ "color": "#f5f5f5" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#ffffff" }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#ffffff" }]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Mortgage Calculation Function
function calculateMortgage() {
    const price = parseFloat(document.getElementById('home-price').value);
    const downPayment = parseFloat(document.getElementById('down-payment').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100 / 12;
    const loanTerm = parseFloat(document.getElementById('loan-term').value) * 12;

    const loanAmount = price * ((100 - downPayment) / 100);
    const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

    document.getElementById('monthly-payment').textContent = `Monthly Payment: $${monthlyPayment.toFixed(2)}`;
}