import {gsap} from "gsap";

gsap.set("#pattles",{transformOrigin: "center"});

export function PattlesAnimation(){
    var tl = gsap.timeline();
    tl.from("#top",{delay:0.2,duration:0.3,x:-1,alpha:0});
    tl.from("#topright",{duration:0.3,x:-1,alpha:0, color:"ffa500"});
    tl.from("#bottomright",{duration:0.3, x:-1,alpha:0});
    tl.from("#bottom",{duration:0.3, x:-1,alpha:0});
    tl.from("#bottomleft",{duration:0.3, x:-1,alpha:0});
    tl.from("#topleft",{duration:0.3, x:-1,alpha:0});
    tl.from("#pattles",{delay:0.3,duration: 1, rotate:360,repeat:-1});

    return tl;
}