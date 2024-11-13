// Declaring the Divs

const maths = document.querySelector('.math');
const stats = document.querySelector('.statistics');
const english = document.querySelector('.english');
const theoryPhysics = document.querySelector('.physics-101');
const computing = document.querySelector('.computing');
const practicalPhysics = document.querySelector('.physics-107');
const softwareEngineering = document.querySelector('.software');

//Declaring the Nav ELements

const mathsLink = document.getElementById('mth');
const statisticsLink = document.getElementById('sta');
const englishLink = document.getElementById('gst');
const theoryPhysicsLink = document.getElementById('phy1');
const computingLink = document.getElementById('cos');
const practicalPhysicsLink = document.getElementById('phy2');
const softwareEngineeringLink = document.getElementById('sen');



mathsLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'none';
    english.style.display = 'none';
    theoryPhysics.style.display = 'none';
    computing.style.display = 'none';
    practicalPhysics.style.display = 'none';
    softwareEngineering.style.display = 'none';
    maths.style.display = 'block';
})

statisticsLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'block';
    english.style.display = 'none';
    theoryPhysics.style.display = 'none';
    computing.style.display = 'none';
    practicalPhysics.style.display = 'none';
    softwareEngineering.style.display = 'none';
    maths.style.display = 'none';
})

englishLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'none';
    english.style.display = 'block';
    theoryPhysics.style.display = 'none';
    computing.style.display = 'none';
    practicalPhysics.style.display = 'none';
    softwareEngineering.style.display = 'none';
    maths.style.display = 'none';
})

computingLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'none';
    english.style.display = 'none';
    theoryPhysics.style.display = 'none';
    computing.style.display = 'block';
    practicalPhysics.style.display = 'none';
    softwareEngineering.style.display = 'none';
    maths.style.display = 'none';
})

theoryPhysicsLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'none';
    english.style.display = 'none';
    theoryPhysics.style.display = 'block';
    computing.style.display = 'none';
    practicalPhysics.style.display = 'none';
    softwareEngineering.style.display = 'none';
    maths.style.display = 'none';
})

practicalPhysicsLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'none';
    english.style.display = 'none';
    theoryPhysics.style.display = 'none';
    computing.style.display = 'none';
    practicalPhysics.style.display = 'block';
    softwareEngineering.style.display = 'none';
    maths.style.display = 'none';
})

softwareEngineeringLink.addEventListener('click', (e)=>{
    e.preventDefault()
    stats.style.display = 'none';
    english.style.display = 'none';
    theoryPhysics.style.display = 'none';
    computing.style.display = 'none';
    practicalPhysics.style.display = 'none';
    softwareEngineering.style.display = 'block';
    maths.style.display = 'none';
})

document.addEventListener('DOMContentLoaded', function() {
    // Select all links with the class "link"
    const links = document.querySelectorAll('.link');
    
    // Add click event listener to each link
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            // Prevent the default behavior (optional if you're using <a> tags)
            e.preventDefault();
            
            // Remove "active" class from all links
            links.forEach(function(link) {
                link.classList.remove('active');
            });
            
            // Add "active" class to the clicked link
            this.classList.add('active');
        });
    });
});