import {gsap} from "gsap";

gsap.set("#flowerface",{transformOrigin: "center"});

export function FaceAnimation(){
    var tl = gsap.timeline();
    tl.from("#flowerface",{duration: 2});
    return tl;
}


