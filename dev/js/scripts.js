import {gsap} from "gsap";
import {PattlesAnimation} from "./pattles.js"
import {FaceAnimation} from "./face.js"
import {PotAnimation} from "./pot.js"


const mainTL = gsap.timeline();
mainTL.add(PattlesAnimation());
mainTL.add(FaceAnimation());
mainTL.add(PotAnimation());