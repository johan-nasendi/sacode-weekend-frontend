import {useState} from 'react'
import Axios from 'axios'
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
    Text,
    TextA
} from './SignElements';
import {
    SosialIcons,
    SosialMedia,
    SosialMediaWrap,
    SosialIconLink
} from '../Footer/FooterElements'
import {  FaGoogle,FaGithub } from 'react-icons/fa';

const SignIn =  () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginstatus, setLoginstatus] = useState('');

    

     const login = () => {
        Axios.post('http://localhost:3001/api/login', {
            email: email,
            password: password,
        }).then((response) => {

            if (response.data.messeage) {
                setLoginstatus(response.data.messeage)
            } else {
                setLoginstatus(response.data[0].email);
                
            }
        });
        
     };

    return (
        <Container>
            <FormWrap>
                <Icon to='/'> SryQCode  {loginstatus} </Icon>
                <FormContent>
                    <Form action="#">
                        <FormH1> Sign In </FormH1>
                        <SosialMedia>
                                 <Text> Login Method API : </Text>
                            <SosialMediaWrap>
                                <SosialIcons>
                                 <SosialIconLink/>  
                                 <SosialIconLink href="" target="_blank" aria-label="Google"> <FaGoogle /> </SosialIconLink>
                                 <SosialIconLink href="" target="_blank" aria-label="Github"> <FaGithub /> </SosialIconLink>
                                <SosialIconLink/>  
                        </SosialIcons>
                    </SosialMediaWrap>
                </SosialMedia>
                        <FormH1> {loginstatus} </FormH1>
                            
                        <FormLabel htmlFor='for'>E-mail</FormLabel>
                        <FormInput type='email' name="email" placeholder="Enter Your Email..." 
                          onChange={(e) =>{setEmail(e.target.value);}} required />

                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' name="password" placeholder="Enter Your Password..."
                          onChange={(e) =>{setPassword(e.target.value);}} required />

                        <FormButton onClick={login}> Continue </FormButton>

                        <Text>Forgot Password</Text>
                        
                        <br />
                        <TextA to='/register'>Register an Account here</TextA>

                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default SignIn
