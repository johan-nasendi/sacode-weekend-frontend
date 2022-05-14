import {useState} from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from '../../components/Register/RegisterElements';


const  CreateTodo = () => {
    const [title, setFistName] = useState('');
    const [content, setLastName] = useState('');

    const redirect=useHistory();

     const submit = () => {
        Axios.post('http://localhost:4000/todos', {
            title : title,
            content : content,
        }).then((response) => {
            alert("Ahee Terima Kasih Lai");
        });
        redirect.push("/todo");
     };
 


    return (
        <Container>
            <FormWrap>
                <Icon to='/'> SryQCode </Icon>
                <FormContent>
                    <Form>
                        <FormH1> Create Todo </FormH1>
                       
                        <FormLabel htmlFor='for'>Title</FormLabel>
                        <FormInput type='text'  name="title" placeholder="Enter title"
                        onChange={(e) =>{setFistName(e.target.value);}}  required  />

                        <FormLabel htmlFor='for'>Fist Name</FormLabel>
                        <FormInput type='text'  name="content" placeholder="Enter content"
                        onChange={(e) =>{setLastName(e.target.value);}}  required  />

                        <FormButton onClick={submit}> Gass!</FormButton>
                        <Text> Have a happy day, Please write your to do list </Text>
                        

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default CreateTodo;
