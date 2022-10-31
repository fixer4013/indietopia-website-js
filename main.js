var aboutSection = document.getElementById('about');
var projectSection = document.getElementById('projects');
var servicesSection = document.getElementById('services');
var testimoniesSection = document.getElementById('testimonies');
var contactSection = document.getElementById('contact');







var beginJourney = document.getElementById('start-button');
var journeySection = document.getElementById('journey-container');
var topHeading = document.getElementById('top-heading');
var progressContainer = document.getElementsByClassName('flag-container');
var explanation = document.getElementById('explanation');
var displayJourney = false;
let displayProgress


beginJourney.addEventListener('click', event => {
    displayJourney = true;
    aboutSection.scrollIntoView();
});



if (!displayJourney) {

};


//CHECKPOINTS
var goToAbout = document.getElementById('go-to-about');
var goToProjects = document.getElementById('go-to-projects');
var goToServices = document.getElementById('go-to-services');
var goToTestimonies = document.getElementById('go-to-testimonies');
var goToContact = document.getElementById('go-to-contact');
var flagButtons = document.querySelectorAll('.flag-button');




for (var i = 0; i < flagButtons.length; i++) {
    flagButtons[i].style.display = 'none';
};

goToAbout.addEventListener('click', event => {
    aboutSection.scrollIntoView();
});

goToProjects.addEventListener('click', event => {
    projectSection.scrollIntoView();
});

goToServices.addEventListener('click', event => {
    servicesSection.scrollIntoView();
});

goToTestimonies.addEventListener('click', event => {
    testimoniesSection.scrollIntoView();
});
goToContact.addEventListener('click', event => {
    contactSection.scrollIntoView();
});


var flagContainer = document.getElementById('flag-container');
var flags = document.querySelectorAll('.flag-object');
var modals = document.querySelectorAll('.modal-container');
var closeModalButton = document.querySelectorAll('[data-close-button]');


//COUNTER
var counterExecuted = false;
var valueDisplays = document.querySelectorAll('.stats-counter');
var interval = 1000;

function counterUp() {
    if (!counterExecuted) {
        valueDisplays.forEach((valueDisplays) => {
            var startValue = 0;
            var endValue = parseInt(valueDisplays.getAttribute('data-val'));
            var duration = Math.floor(interval / endValue);
            var counter = setInterval(function () {
                startValue += 1;
                valueDisplays.textContent = startValue;
                if (startValue == endValue) {
                    clearInterval(counter);
                }
            }, duration);
        });
    };
};

//WAYPOINTS
var secondExplanation = document.getElementById('checkpoint-explanation');

var aboutCheckpoint = document.getElementById('aboutCheckpoint');
var projectsCheckpoint = document.getElementById('projectsCheckpoint');
var servicesCheckpoint = document.getElementById('servicesCheckpoint');
var testimonies = document.getElementById('testimoniesCheckpoint');
var contactCheckpoint = document.getElementById('contactCheckpoint');

var firstCheckpoint = false;
var secondCheckpoint = false;
var thirdCheckpoint = false;
var fourthCheckpoint = false;
var fifthCheckpoint = false;

var aboutWaypoint = new Waypoint({
    element: document.getElementById('about'),
    handler: function (direction) {
        aboutCheckpoint.classList.add('active');
        firstCheckpoint = true;
        journeySection.style.display = 'none';
        topHeading.style.display = 'none';
        for (var i = 0; i < flagButtons.length; i++) {
            flagButtons[0].style.display = 'inline'
        };
        for (var i = 0; i < flags.length; i++) {
            flags[0].classList.add('active');
            flags[0].style.cursor = 'pointer';
        };
        
        if (firstCheckpoint == true) {
            openFirstCheckpoint()
        }
    return;
    }
});


var projectsWaypoint = new Waypoint({
    element: document.getElementById('projects'),
    handler: function (direction) {
        projectsCheckpoint.classList.add('active');
        secondCheckpoint = true;
        secondExplanation.style.display = 'none';
        for (var i = 0; i < flagButtons.length; i++) {
            flagButtons[1].style.display = 'inline';
        };
        for (var i = 0; i < flags.length; i++) {
            flags[1].classList.add('active');
            flags[1].style.cursor = 'pointer';
        };
        if (secondCheckpoint == true) {
            openSecondCheckpoint()
        };
    
        return;
    }
});
var servicesWaypoint = new Waypoint({
    element: document.getElementById('services'),
    handler: function (direction) {
        servicesCheckpoint.classList.add('active');
        thirdCheckpoint = true;
        for (var i = 0; i < flagButtons.length; i++) {
            flagButtons[2].style.display = 'inline'
        };
        for (var i = 0; i < flags.length; i++) {
            flags[2].classList.add('active');
            flags[2].style.cursor = 'pointer';
        };
        if (thirdCheckpoint == true) {
            openThirdCheckpoint()
        };
    
        return;
    }
});
var testimoniesWaypoint = new Waypoint({
    element: document.getElementById('testimonies'),
    handler: function (direction) {
        testimoniesCheckpoint.classList.add('active');
        fourthCheckpoint = true;
        counterUp();
        counterExecuted = true;
        for (var i = 0; i < flagButtons.length; i++) {
            flagButtons[3].style.display = 'inline'
        };
        for (var i = 0; i < flags.length; i++) {
            flags[3].classList.add('active');
            flags[3].style.cursor = 'pointer';
        };
        if (fourthCheckpoint == true) {
            openFourthCheckpoint()
        };
    
        return;
    }
});

var contactWaypoint = new Waypoint({
    element: document.getElementById('contact'),
    handler: function (direction) {
        contactCheckpoint.classList.add('active');
        fifthCheckpoint = true;
        for (var i = 0; i < flagButtons.length; i++) {
            flagButtons[4].style.display = 'inline'
        };
        for (var i = 0; i < flags.length; i++) {
            flags[4].classList.add('active');
            flags[4].style.cursor = 'pointer';
        };
        if (fifthCheckpoint == true) {
            openFifthCheckpoint()
        };

    }
});



//FLAG MODALS
for (var i = 0; i < modals.length; i++) {
    for (var i = 0; i < flags.length; i++) {
        function openFirstCheckpoint() {
            flags[0].addEventListener('click', event => {
                flagContainer.style.pointerEvents = 'none';
                modals[0].classList.add('active');
            });
        };
        function openSecondCheckpoint() {
            flags[1].addEventListener('click', event => {
                flagContainer.style.pointerEvents = 'none';
                modals[1].classList.add('active');
            });
        };
        function openThirdCheckpoint()  {
            flags[2].addEventListener('click', event => {
                flagContainer.style.pointerEvents = 'none';
                modals[2].classList.add('active');
            });
        };
        function openFourthCheckpoint()  {
            flags[3].addEventListener('click', event => {
                flagContainer.style.pointerEvents = 'none';
                modals[3].classList.add('active');
            });
        };
        function openFifthCheckpoint()  {
            flags[4].addEventListener('click', event => {
                flagContainer.style.pointerEvents = 'none';
                modals[4].classList.add('active');
            });
        };
    };
};


//CLOSE MODAL
closeModalButton.forEach(button => {
    button.addEventListener('click', () => {
        var modal = button.closest('.modal-container')
        closeModal(modal)
        flagContainer.style.pointerEvents = 'all'
    })
});

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
}


//TESTIMONIES

var slides = document.querySelectorAll('.reviews-container');
var index = 0;

function goNext() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');

};

function goPrev() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
};


//DROPDOWN MENU

var dropdowns = document.querySelectorAll('.dropdown');

console.log(dropdowns)

dropdowns.forEach(dropdown => {
    var select = dropdown.querySelector('.select');
    var caret = dropdown.querySelector('.caret');
    var menu = dropdown.querySelector('.dropdown-menu');
    var options = dropdown.querySelectorAll('.dropdown-menu li');
    var selected = dropdown.querySelector('.selected');

    select.addEventListener('click', event => {
        select.classList.toggle('clicked');
        caret.classList.toggle('rotate');
        menu.classList.toggle('open');
    });



    options.forEach(option => {
        option.addEventListener ('click', event => {
            selected.innerText = option.innerText;
            select.classList.remove('clicked');
            caret.classList.remove('rotate');
            menu.classList.remove('open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});



