import {gsap} from "gsap";
import {PattlesAnimation} from "./pattles.js"
import {FaceAnimation} from "./face.js"


const mainTL = gsap.timeline();
mainTL.add(PattlesAnimation());
mainTL.add(FaceAnimation());