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
} from './RegisterElements';


const  Register = () => {
    const [fist_name, setFistName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect=useHistory();

     const submit = () => {
        Axios.post('http://localhost:3001/api/insert', {
            fist_name : fist_name,
            last_name : last_name,
            email: email,
            password: password,
        }).then((response) => {
            alert("Thank You!, Please LOGIN");
        });
        redirect.push("/signin");
     };
 


    return (
        <Container>
            <FormWrap>
                <Icon to='/'> SryQCode </Icon>
                <FormContent>
                    <Form  action="#">
                        <FormH1> Register for a new account </FormH1>

                        <FormLabel htmlFor='for'>Fist Name</FormLabel>
                        <FormInput type='text'  name="fist_name" placeholder="Enter your fist name..."
                        onChange={(e) =>{setFistName(e.target.value);}}  required  />

                        <FormLabel htmlFor='for'>Fist Name</FormLabel>
                        <FormInput type='text'  name="last_name" placeholder="Enter your last name or family name..."
                        onChange={(e) =>{setLastName(e.target.value);}}  required  />

                        <FormLabel htmlFor='for'>E-mail</FormLabel>
                        <FormInput type='email' name="email" placeholder="Enter..." 
                         onChange={(e) =>{setEmail(e.target.value);}}  required />

                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type="password" name="password" placeholder="Enter..."
                        onChange={(e) =>{setPassword(e.target.value);}} required />

        
                        <FormButton onClick={submit}> Sign up now </FormButton>
                        <Text> Okay !</Text>
                        

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default Register;
