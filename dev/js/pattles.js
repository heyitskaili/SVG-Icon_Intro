import {gsap} from "gsap";

gsap.set("#pattles",{transformOrigin: "center"});

export function PattlesAnimation(){
    var tl = gsap.timeline();
    tl.from("#pattles",{duration: 2, rotate:360, repeat:-1});
    return tl;
}