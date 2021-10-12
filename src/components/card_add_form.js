import React, { useRef } from 'react';
import styled from 'styled-components';
import Button from './button';
import ImageFileInput from './image_file_input';

const CardAddForm = ({onSubmit}) => {
    const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        const card = {
            id: Date.now(),
            name: nameRef.current.value || '',
            company: companyRef.current.value || '',
            theme: themeRef.current.value,
            title: titleRef.current.value || '',
            email: emailRef.current.value || '',
            message: messageRef.current.value || '',
            fileName: '',
            fileURL: '',
        };
        formRef.current.reset();
        onSubmit(card);
    }
    return (
        <Form ref={formRef}>
            <Input ref={nameRef} type="text" name="name" placeholder="Name" />
            <Input ref={companyRef} type="text" name="company" placeholder="Company" />
            <Select ref={themeRef} name="theme" placeholder="Theme">
                <option placeholder="light">light</option>
                <option placeholder="dark">dark</option>
                <option placeholder="navy">navy</option>
            </Select>
            <Input ref={titleRef} type="text" name="title" placeholder="Title" />
            <Input ref={emailRef} type="text" name="email" placeholder="Email" />
            <Textarea ref={messageRef} name="message" placeholder="Message" />
            <ImageContainer>
                <ImageFileInput />
            </ImageContainer>
            <Button name='Add' onClick={handleSubmit} />
        </Form>
    );
};

export default CardAddForm;

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
`;
const Input = styled.input`
    padding: 5px;
    &[name="name"],&[name="company"]{width: 33.33%};
    &[name="title"],&[name="email"]{width: 50%};
`;
const Select = styled.select`
    width: 33.33%;
    padding: 5px;
`;
const Textarea = styled.textarea`
    width: 100%;
    padding: 5px;
`;
const ImageContainer = styled.div`
    width: 50%;
`;