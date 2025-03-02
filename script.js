gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.cont02 ul',
        start: 'top 90%',
        end: '20% 100%',
        scrub: 2,
        markers: true,
      },
    })
    .to(
      '.cont02 li:nth-child(1)',
      { y: '-400px', duration: 1, ease: 'none' },
      0.2
    )
    .to(
      '.cont02 li:nth-child(2)',
      { y: '-400px', duration: 1, ease: 'none' },
      0.4
    )
    .to(
      '.cont02 li:nth-child(3)',
      { y: '-400px', duration: 1, ease: 'none' },
      0.6
    )
    .to(
      '.cont02 li:nth-child(4)',
      { y: '-400px', duration: 1, ease: 'none' },
      0.8
    );
});
