    $(document).ready(function(){
    // Add smooth scrolling to all links
    $('.page-scroll').on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, 'easeInOutExpo');
      } // End if
    });
  });



const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });


  $(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	if (wScroll > $('.tombol').offset().top - 600 ) {
	$('.tombol') .addClass("muncul");	
}
	if (wScroll > $('.tomboll').offset().top - 600 ) {
	$('.tomboll') .addClass("muncul");	
}
	if (wScroll > $('.tombolll').offset().top - 600 ) {
	$('.tombolll') .addClass("muncul");	
}
})


	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
  
