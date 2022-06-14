import React,{useState} from "react";
import { Card, Image, Space,Typography,Drawer, Button} from "antd";
import Picture from "../asset/images/forest1.jpg";
import allTours from "../asset/data/Tours.json";
import Singletour from "../component/Singletour";
 const {Text,Title}=Typography

const Tours=()=>{
   
  const [ showDrawer,setShowDrawer]=useState(true)
  const [selectedTour,setSelectedTour]=useState(true)
    return (
      <>
    <div style={{width:'100%', height:'Auto', padding:" 10px"}}>
    <Card >
    {allTours.map((Tours)=>
    (<Card.Grid style={{width:'32%',minHeight:'30rem'}} >
        <Space direction="vertical">
          <Image preview={true} src= {Picture} style={{width:'100%',minHeight:'30rem'}}/>
         <Title level={4} style={{color:"#1976D1"}}>
         {Tours.title.toUpperCase() }
         </Title>
         <Text type="secondary" italic>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed blandit massa vel Lorem ipsum dolor sit amet, consectetur adipiscing elit.
           Sed blandit massa vel
             mauris Lorem</Text>
          <Space> 
         <Text> DueDate:</Text>
         <Text strong> {Tours.dueDate}12-02-2020-10h00 am</Text>
         </Space>
           <Button onClick={()=>{ setSelectedTour(Tours);setShowDrawer(true)}}> Book now!</Button>
         </Space>
         
        </Card.Grid>
        ))}

        
    
    </Card>
    </div>
    <Drawer title="single Tour!"
       placement="right"
        onClose={()=>{setShowDrawer(false)}} visible={showDrawer}>
          <Singletour data={selectedTour}></Singletour> 
          </Drawer>
   
    </>
    )
}
export default Tours;