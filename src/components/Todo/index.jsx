import React from 'react'
import icon1 from '../../images/activity-1.svg';
import {
    TodoContainer,
    TodoWrapper,
    TodoH1,
    TodoCard,
    TodoH2,
    TodoP,
    TodoIcon

} from './TodoElements';

class Todo extends React.Component {

       // Constructor 
       constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }

    componentDidMount() {
        fetch("http://localhost:4000/todos")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1 className='text-center'> Pleses wait some time.... </h1> </div> ;

return (
    <TodoContainer id='activity'>
        <TodoH1> Todo List </TodoH1>
                 <TodoWrapper>
             {
                 items.map((item) => (

                    <TodoCard  key={item.id}> 
                         <TodoIcon src={icon1} /> 
                          <TodoH2> {item.title} </TodoH2>
                         <TodoP> {item.content} </TodoP>
                    </TodoCard>
                 )) 
                }
                </TodoWrapper>

        </TodoContainer>
     );

    }
 
};

export default Todo
