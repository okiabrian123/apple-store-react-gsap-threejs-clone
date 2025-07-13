import gsap from 'gsap'
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger);

export const animateWithGsap=(target,animationProps,scrollProps)=>{
    gsap.to(target, {
        ...animationProps,
        scrollTrigger: {
            trigger: target,
            toggleActions:'restart reverse restart reverse',
            start:'top 85%',
            ...scrollProps
        },
    });
}

export const animateWithGsapTimeline = (gsapTimeline, modelRef, rotationState, firsttarget, secondtarget, animationProps) => {
    gsapTimeline.to(modelRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: "power2.inOut",
    });
    
    gsapTimeline.to(firsttarget, {
        ...animationProps,
        ease: "power2.inOut",
    },
    '<'
    );
    
    gsapTimeline.to(secondtarget, {
        ...animationProps,
        ease: "power2.inOut",
    }
    ,'<'
    );
};  // Added missing semicolon and closing brace