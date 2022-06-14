import React from "react";
import { FacebookOutlined, TwitterOutlined, InstagramOutlined} from '@ant-design/icons';
import {  Form, Input,Space,Typography,Icons } from 'antd';
const {text}= Typography;
const { TextArea } = Input;
const Contact = () => {
return(
    <>
    <div>
    <h2>GET IN TOUCH</h2>
    <h3>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</h3>
    </div>
    <text>phone number </text>
    <text> +250 783 912 296</text>
    <text>insta-gram</text>
    <text>phone number</text>
    <text>phone number</text>
    <text>phone number</text>
    <form style={{width:"50%", padding:"right"}}>
     <Form.Item 
    
     name="email"
     rules={[{ required: true, message: 'Please input your username!' }]}
   >
     <Input placeholder="your name" />
    
   </Form.Item>
   <Form.Item 
    
     name="username"
     rules={[{ required: true, message: 'Please input your username!' }]}
   >
     <Input placeholder="your email" />
   </Form.Item>
   <Form.Item >
        <TextArea rows={4} placeholder="your message"/>
      </Form.Item>
   </form>



   </>
)
};

export default Contact;