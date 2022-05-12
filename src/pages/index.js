import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

import { homeObjOne, homeObjTree, homeObjTwo } from '../components/InfoSection/Data';
// import Serivices from '../components/Service';
import Footer from '../components/Footer';
import Activity from '../components/Activity';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
         <Navbar  toggle={toggle} />
         <HeroSection />
         <InfoSection {...homeObjOne} />
         {/* <Serivices /> */}
         <Activity /> 
         <InfoSection {...homeObjTwo} />
         <InfoSection {...homeObjTree} />
         <Footer />
        </>
        
    );
};

export default Home;
