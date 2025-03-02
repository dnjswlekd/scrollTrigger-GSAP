gsap.registerPlugin(ScrollTrigger);

$(function () {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.cont02',
        start: 'top 90%',
        end: '20% 100%',
        scrub: 2,
        markers: false,
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

  // content03
  gsap
    .timeline({
      scrollTrigger: {
        trigger: '.cont03',
        start: 'top 100%',
        end: '100% 100%',
        scrub: 2,
        markers: true,
      },
    })
    .fromTo('.cont03 .a', { y: '400%' }, { y: '0' }, 1.2)
    .fromTo('.cont03 .b', { y: '400%' }, { y: '0' }, 1.4)
    .fromTo('.cont03 .c', { y: '400%' }, { y: '0' }, 1.6)
    .fromTo('.cont03 .d', { y: '400%' }, { y: '0' }, 1.8)
    .fromTo('.cont03 .e', { y: '400%' }, { y: '0' }, 2);
});
