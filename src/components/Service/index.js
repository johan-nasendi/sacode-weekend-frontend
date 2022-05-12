import React from 'react'
import Icon1 from '../../images/html.png';
import Icon2 from '../../images/css.png';
import Icon3 from '../../images/js.png';
import Icon4 from '../../images/srv-2.svg';
import Icon5 from '../../images/php.png';
import Icon6 from '../../images/laravel.png';
import {
    ServicesContainer,
    SerivicesH1,
    SerivicesWrapper,
    SerivicesCard,
    SerivicesIcon,
    SerivicesH2,
    SerivicesP
} from './ServiceElements';

const Serivices = () => {
    return (
        <ServicesContainer id='service'>
            <SerivicesH1> What To Learn </SerivicesH1>
            <SerivicesWrapper>
                <SerivicesCard>
                    <SerivicesIcon src={Icon1}/>
                    <SerivicesH2>HTML</SerivicesH2>
                    <SerivicesP>The most basic thing in learning web programming is knowing HTML and understanding how to use it.</SerivicesP>
                </SerivicesCard>
                <SerivicesCard>
                    <SerivicesIcon src={Icon2}/>
                    <SerivicesH2>CSS</SerivicesH2>
                    <SerivicesP>The most basic thing in learning web programming is knowing CSS and understanding how to use it.</SerivicesP>
                </SerivicesCard>
                <SerivicesCard>
                    <SerivicesIcon src={Icon3}/>
                    <SerivicesH2>JavaScript</SerivicesH2>
                    <SerivicesP>Understanding the concept and application of JavaScript will make your website or web application more interactive.</SerivicesP>
                </SerivicesCard>
                <SerivicesCard>
                    <SerivicesIcon src={Icon4}/>
                    <SerivicesH2>ReactJs</SerivicesH2>
                    <SerivicesP>React is the most popular Javascript library for creating user interfaces (UI). This tool offers fast response to user input by using a new method in the website rendering process.</SerivicesP>
                </SerivicesCard>
                <SerivicesCard>
                    <SerivicesIcon src={Icon5}/>
                    <SerivicesH2>PHP</SerivicesH2>
                    <SerivicesP>In order for the website to be dynamic and carry out the functions of add, edit, delete, and so on, PHP can be an alternative.</SerivicesP>
                </SerivicesCard>
                <SerivicesCard>
                    <SerivicesIcon src={Icon6}/>
                    <SerivicesH2>Laravel</SerivicesH2>
                    <SerivicesP>The Laravel PHP framework is growing rapidly every year and is often used in building fairly complete systems.</SerivicesP>
                </SerivicesCard>

            </SerivicesWrapper>
        </ServicesContainer>
    )
}

export default Serivices;
