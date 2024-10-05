const express=require("express");
const bodyparser=require("body-parser");
const cors=require("cors");
const mongoose=require("mongoose");



const app=express();
const port=3500;
app.use(cors());
app.use(bodyparser.urlencoded({limit:'10mb',extended:true}));
app.use(bodyparser.json({limit:"10mb"}));

const EmployeeRoute=require("./Routers/EmployeeRouter");
const AttendenceRoute=require("./Routers/AttendenceRouter");
const PaymentRoute=require("./Routers/PaymentRouter");
const Attendance_record_Router=require("./Routers/Attendance_record_Router")
const Login=require("./Routers/LoginRouter")
const HRroute=require("./Routers/HR_router")


app.use("/Employee",EmployeeRoute);

app.use("/Attendance",AttendenceRoute);
app.use("/Payment",PaymentRoute);
app.use("/Attendance_record",Attendance_record_Router)
app.use('/login',Login)
app.use('/HR',HRroute)

mongoose.connect("mongodb+srv://lakshan0714:lakshan123@hr.mb9wr19.mongodb.net/")
.then(()=>
{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.log(err)
})


app.listen(port,()=>{
    console.log("Server is running succesfully in portr no 3500")
})


