import React, { useState } from 'react';
import Video from '../../video/video1.mp4';
import { Button } from '../ButtonElements';

import 
{
HeroContainer,
 HeroBg,
 VideoBg,
 HeroContent,
 HeroH1,
 HeroP,
 HeroBtnWrapper,
 ArrowForward,
 ArrowRight
} from './HeroElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
               
                <HeroH1> 
                  Welcome
                </HeroH1>
                <HeroH1> 
                Thank you for visiting the SryQCode Website
                </HeroH1>
                <HeroP>
                 Let's start new and learn to find something new
                </HeroP>
                
                <HeroBtnWrapper>
                    <Button
                     to='signup' 
                     onMouseEnter={onHover} 
                     onMouseLeave={onHover}
                     primary='true'
                     dark='true'> 
                        Get Started {hover ? <ArrowForward /> :  <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;
