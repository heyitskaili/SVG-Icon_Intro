import {gsap} from "gsap";

gsap.set("#pots",{transformOrigin: "center"});

export function PotAnimation(){
    var tl = gsap.timeline();
    tl.from("#pots",{duration: 2, rotate:360, repeat:-1});
    return tl;
}