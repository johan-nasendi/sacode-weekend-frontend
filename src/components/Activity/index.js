import React from 'react'
import icon1 from '../../images/activity-1.svg';
import icon2 from '../../images/activity-2.svg';
import icon3 from '../../images/activity-3.svg';
// import icon4 from '../../images/activity-4.svg';
// import icon5 from '../../images/activity-5.svg';
// import icon6 from '../../images/activity-6.svg';
import {
    ActivityContainer,
    ActivityWrapper,
    ActivityH1,
    ActivityCard,
    ActivityH2,
    ActivityP,
    ActivityIcon

} from './ActivityElements';

class Activity extends React.Component {

       // Constructor 
       constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
render() {
    // const { DataisLoaded, items } = this.state;
    // if (!DataisLoaded) return <div>
    //     <h1> Pleses wait some time.... </h1> </div> ;

return (
    <ActivityContainer id='activity'>
        <ActivityH1> Activity </ActivityH1>
             
            <ActivityWrapper>
                <ActivityCard> 
                    <ActivityIcon src={icon1} /> 
                    <ActivityH2> Mettings </ActivityH2>
                    <ActivityP> Lorem Ipsum is simply dummy text of the 
                        printing and typesetting industry. 
                        Lorem Ipsum has been the industry's </ActivityP>
                </ActivityCard>
                <ActivityCard>
                    <ActivityIcon src={icon2} />
                    <ActivityH2> forum discussion </ActivityH2>
                    <ActivityP> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </ActivityP>
                </ActivityCard>
                <ActivityCard>
                    <ActivityIcon src={icon3} />
                    <ActivityH2>Watch Video </ActivityH2>
                    <ActivityP> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </ActivityP>
                </ActivityCard>
            </ActivityWrapper>
        </ActivityContainer>
     );

    }
 
};

export default Activity
