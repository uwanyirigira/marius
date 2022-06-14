import Title from "antd/lib/skeleton/Title";
import { Carousel } from 'antd';
import React from "react";
import { Card, Image, Space,Input, Button} from "antd";
const Singletour=({data})=>{
return(

 <div>
    <h1> {data.title} </h1>
    <Carousel autoplay>
    <img src = {data.photo}/>
    <img src = {data.pictures}/>
    </Carousel>

    
    <h1> {data.prepareBy} </h1>
   <h3>About tour</h3>
    <h5> {data.description} </h5>
    <h2> {data.dueDate} </h2>
    
    
       < Card title="informatin form">

        <Space direction="vertical">
            <Input placeHolder="email"></Input>
            <Input placeHolder="phone"></Input>
            <Button style={{ color:"blue"}}> send message</Button>
        </Space>
        

       </Card>
    
    </div> 

)
}
export default Singletour;