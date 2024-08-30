function page1Animation() {
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.15,
        opacity: 0,
    })
    tl.from(".center-part1 h1", {
        x: -300,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".center-part1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5,
    })

    tl.from(".center-part1 button", {
        opacity: 0,
        duration: 0.3,

    })

    tl.from(".center-part2 img", {
        opacity: 0,
        duration: 1,
    }, "-=0.5")


}
page1Animation();


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        scroller: "body",
        start: "top 50%",
        end: "top 0%",
        scrub: 2,

    }
});
tl2.from(".services", {
    y: 30,
    opacity: 0,
})

