import React from "react";
import { useSpring, animated } from "@react-spring/web";


function TitlesAnimation(props){

    const springTitle = useSpring({
        from:{ opacity:0},
        to:{opacity:1},
        config: {duration:4000} 
    })

    return(
        <animated.div style={springTitle}> {props.text} </animated.div>
    )

}

export default TitlesAnimation;