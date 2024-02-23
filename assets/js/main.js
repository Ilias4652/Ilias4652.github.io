jQuery(window).on('load', function() {
	"use strict";
    
    
    // HIDE PRELOADER
    $(".preloader").addClass("hide-preloader");   
    
    // SHOW/ANIMATE ANIMATION CONTAINER
    setTimeout(function(){

        $("#intro .animation-container").each(function() {

            var e = $(this);

            setTimeout(function(){

                e.addClass("run-animation");

            }, e.data("animation-delay") );

        });

    }, 700 );

    
});


jQuery(document).ready(function($) {
	"use strict";
    
    
    // SMOOTH SCROLL FOR SAME PAGE LINKS
    $(document).on('click', 'a.smooth-scroll', function(event) {
        
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top - 80
        }, 500);
        
    });
    
    
    // SCROLL REVEAL SETUP
    window.sr = ScrollReveal();
    sr.reveal(".scroll-animated", { 
        duration: 600,
        delay: 0,
        origin: "left",
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        distance: "20vh",
        viewFactor: 0.4,
        scale: 1,
    });
    
    
    // AJAX CONTACT FORM SUBMIT
    $(document).ready(function() {
        $("#contact-form").submit(function(e) {
            // Prevent the default form submission behavior
            e.preventDefault();
    
            // Execute custom behavior
            setTimeout(function() {
                $('#contact-form').addClass("success");
                $('#contact-form textarea, #contact-form input').val("");
    
                setTimeout(function() {
                    $('#contact-form').removeClass("success");
                }, 4000);
            }, 1000);
    
            // Manually submit the form to Formspree after custom behavior
            $.ajax({
                url: "https://formspree.io/f/mvoerpal",
                method: "POST",
                data: $(this).serialize(),
                dataType: "json"
            }).done(function(response) {
                // Handle the response if needed
                console.log("Form submitted successfully:", response);
            }).fail(function(jqXHR, textStatus, errorThrown) {
                // Handle errors if the form submission fails
                console.error("Form submission failed:", textStatus, errorThrown);
            });
        });
    });
    

    
});

document.addEventListener("DOMContentLoaded", function(event) {
    var span = document.getElementById("name");
    var cursor = document.getElementById("cursor");
    var intro = document.querySelector(".intro");
    var delay = 200; // milliseconds between each letter
    var isCursorVisible = false; // Initially cursor is hidden
    i = 0;
    function typeWriter(text, index) {
        if (index < text.length) {
            span.textContent += text[index];
            setTimeout(function() {
                typeWriter(text, index + 1);
            }, delay);
        } else {
            // Cursor starts blinking after typing is complete
            if(i>=1){
            cursorBlinkInterval = setInterval(blinkCursor, 500);
            }
            i = i+1;
        }
    }

    function blinkCursor() {
        isCursorVisible = !isCursorVisible; // Toggle visibility
        cursor.style.visibility = isCursorVisible ? "visible" : "hidden"; // Set visibility based on toggle
    }

    function stopCursorBlink() {
        clearInterval(cursorBlinkInterval); // Stop the blinking interval
        cursor.style.visibility = "hidden"; // Hide the cursor
    }

    var greeting = "Hello !! ";
    var name = "I am Ilias Kapsis."; // Replace 'YourName' with your actual name
    
    // Trigger animation when DOM is fully loaded
    intro.style.opacity = 1;

    // Start the typing animation for "Hello" and "My name is Ilias Kapsis."
    setTimeout(function() {
        typeWriter(greeting.split(""), 0);
        setTimeout(function() {
            span.textContent = "";
            typeWriter(name.split(""), 0);
        }, 2000); // Delay before typing name
    }, 1000); // Delay before starting animation

    // Define your next function here
    function yourNextFunction() {
        console.log("Next function is called immediately after typing animation.");
        // Add your code here
    }
});

// Add JavaScript to trigger typing animation after sliding animation is complete
// JavaScript to trigger typing animation when elements are in the viewport

document.addEventListener("DOMContentLoaded", function(event) {
    var span = document.getElementById("name2");
    var cursor = document.getElementById("cursor2");
    var intro = document.querySelector("[data-tag='intro2']");
    var delay = 50; // milliseconds between each letter
    var isCursorVisible = false; // Initially cursor is hidden
    var animationStarted = false; // Flag to track if animation has started
    var name = "I am currently studying Computer Science at the University of Crete. I am 21 years old and i am currently on the fourth year of my studies.My main fields of expertise are software engineering, web development/design, and game development. I am profficient using the following languages : C/C++,Java,HTML/CSS/JS. I am also capable of programming in these languages : Python, SQL,C#.I can speak 3 languages. My mother togue is Greek, i am fluent in English and i am currently studying Italian. I have a driver's license for a car and a motorbike.I am interested in Sports, Music,Cars,Programming and Videogames. In the future i would love to build my own idea into a startup and maybe get into music.";

    // Function to check if element is in viewport
    function isInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Start the typing animation for "Hello" and "My name is Ilias Kapsis."
    function startAnimationIfVisible() {
        if (isInViewport(span) && !animationStarted) { // Check if animation hasn't started yet
            animationStarted = true; // Set flag to indicate animation started
            setTimeout(function() {
                span.textContent = "";
                typeWriter(name.split(""), 0);
            }, 1000); // Delay before typing name
        }
    }

    var throttleTimer;
    window.addEventListener('scroll', function() {
        if (!throttleTimer) {
            throttleTimer = setTimeout(function() {
                startAnimationIfVisible();
                throttleTimer = null;
            }, 100); // Adjust the debounce/throttle time as needed
        }
    });

    function typeWriter(text, index) {
        if (index < text.length) {
            span.textContent += text[index];
            setTimeout(function() {
                typeWriter(text, index + 1);
            }, delay);
        } else {
            // Cursor starts blinking after typing is complete
            cursorBlinkInterval = setInterval(blinkCursor, 500);
        }
    }

    function blinkCursor() {
        isCursorVisible = !isCursorVisible; // Toggle visibility
        cursor.style.visibility = isCursorVisible ? "visible" : "hidden"; // Set visibility based on toggle
    }

    function stopCursorBlink() {
        clearInterval(cursorBlinkInterval); // Stop the blinking interval
        cursor.style.visibility = "hidden"; // Hide the cursor
    }

    // Trigger animation when DOM is fully loaded
    intro.style.opacity = 1;

    // Define your next function here
    function yourNextFunction() {
        console.log("Next function is called immediately after typing animation.");
        // Add your code here
    }
});


function initializeDownload() {
    document.getElementById('downloadLink').addEventListener('click', function(event) {
        event.preventDefault();
        var link = document.createElement('a');
        link.href = "assets/js/IliasKapsis_CV.pdf"
        link.download = 'IliasKapsis_CV.pdf';
        link.dispatchEvent(new MouseEvent('click'));
    });
}
