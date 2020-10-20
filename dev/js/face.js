import {gsap} from "gsap";

// gsap.set("#flowerface",{transformOrigin: "center"});


export function FaceAnimation(){
    var tl = gsap.timeline();
    tl.to("#righteye",{duration: 2, x:-2});
    tl.to("#lefteye",{duration: 2, x:20});
    return tl;

    
}

