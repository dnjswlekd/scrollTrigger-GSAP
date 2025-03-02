gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.cont02',
        start: '0% 50%',
        end: '30% 0%',
        scrub: 10,
        markers: true,
      },
    })
    .fromTo(
      '.circle',
      { width: '0', height: '0', duration: '10', ease: 'elastic', top: '3%' },
      { width: '2500px', height: '2500px', duration: '10', top: '30%' },
      0
    );

  // textbox

  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.cont02 .textbox',
        start: '0% 80%',
        end: '100% 80%',
        scrub: 10,
        markers: true,
      },
    })
    .fromTo(
      '.textbox',
      { top: '50%', duration: '5', ease: 'elastic', opacity: 0 },
      { top: '40%', duration: '5', ease: 'none', opacity: 1 },
      0
    );
});
