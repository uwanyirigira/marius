import React from "react";
import { FacebookOutlined, PhoneOutlined , TwitterOutlined, InstagramOutlined} from '@ant-design/icons';
import {  Form,Card, Input,Space,Typography,Icons } from 'antd';
import Image from "../asset/images/Golira.jpg";

const {text}= Typography;

const { TextArea } = Input;
const Contact = () => {
return(
    <>
   <div style={{background:"white",fontSize:"2rem"}}>
    <div style={{textAlign:"center",fontSize:"2rem"}}>
    <h2>GET IN TOUCH</h2>
    <h3>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</h3>
    </div>
    <Card style={{minHeit:"30rem",fontSize:"2rem",width:"45rem", backgroundColor:"pink", marginLeft:"5rem",marginTop:"7rem"}}>
    <div style={{ marginLeft:"10rem",marginTop:"8rem", fontSize:"2rem" }}>
    <p> <b>phone number </b></p>
    <p><a><PhoneOutlined/></a>+250 783 912 296</p>
    <p><a><InstagramOutlined/></a> <b>instagram</b> </p>
    <p><b><a><FacebookOutlined/></a>facebook</b></p>
    <text>marius</text>
    <p><a><TwitterOutlined/></a>twitter</p>
    </div>
    </Card>
    <div style={{width:"60%", marginLeft:"15rem",marginTop:"-25.0rem",fontSize:"2rem" }} >
    <Space >
    <form style={{width:"50%", marginLeft:"80rem",marginTop:"-70rem" }}>
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
   </Space>
   </div>

   </div>

   </>
)
};

export default Contact;