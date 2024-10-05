
import { AntDesign, Ionicons, SimpleLineIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Attendance from './Attendence/Attendance';
import AttendanceHome from './Attendence/AttendanceHome';
import Chat from './Chat/HRchat';
import Company from './Companyprofile/companyprofile';
import EmpScreen from './EmpScreens/EmpHome';
import Mark from './EmpScreens/Mark';
import ViewEmployee from './EmpScreens/ViewProfile';
import Loc from './EmpScreens/newww';
import AddEmployee from './Employee/AddEmployee';
import Employee from './Employee/Employee';
import EmployeeDetails from './Employee/EmployeeDetails';
import Update from './Employee/Update';
import Home from './Home';
import HomeScreen from './Loginscreens/HomeScreen';
import LoginScreen from './Loginscreens/LoginScreen';
import Signup from './Loginscreens/Signup';
import CalculatePayroll from './PayRoll/CalculationPage';
import Daterange from './PayRoll/Daterange';
import PayRoll from './PayRoll/PayRoll';
import Performance1 from './Performance/Performance1';
import Task from './Taskmangement/Task';

//colours "#2F284E", "#EEBBD5"
//blue #0072b1

const Stack = createNativeStackNavigator();
const Tab=createMaterialBottomTabNavigator();

function Tab2({route}){

  const HR=route.params?.HR


  return(
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Home"
    
   
    barStyle={{ backgroundColor: 'white',height:30,marginBottom:45 }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      initialParams={{HR}}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          
          
          <Ionicons name="home-outline" size={26} color="#0072b1" />
        ),
      }}
    />
     <Tab.Screen
      name="Employee"
      component={Employee}
      options={{
        tabBarLabel: 'Employees',
        tabBarIcon: () => (
          <SimpleLineIcons name="people" size={26} color="#0072b1" />
        ),
      }}
    />
     <Tab.Screen
      name="Chat"
      component={Chat}
      initialParams={{HR}}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: () => (
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#0072b1" />
        ),
      }}
    />
     <Tab.Screen
      name="Companyprofile"
      initialParams={{HR}}
      component={Company}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <AntDesign name="user" size={26} color="#0072b1" />
        ),
      }}
    />

   
 </Tab.Navigator>

  )
}


function Tab3({route}){

  const HR=route.params?.HR


  return(
    <Tab.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="EmpScreen"
    
   
    barStyle={{ backgroundColor: 'white',height:30,marginBottom:45 }}
  >
    <Tab.Screen
      name="EmpScreen"
      component={EmpScreen}
      initialParams={{HR}}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => (
          
          
          <Ionicons name="home-outline" size={26} color="#0072b1" />
        ),
      }}
    />
    
     <Tab.Screen
      name="Chat"
      component={Chat}
      initialParams={{HR}}
      options={{
        tabBarLabel: 'Chat',
        tabBarIcon: () => (
          <Ionicons name="chatbubble-ellipses-outline" size={28} color="#0072b1" />
        ),
      }}
    />

     <Tab.Screen
      name="ViewEmployee"
   //   initialParams={{HR}}
      component={ViewEmployee}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: () => (
          <AntDesign name="user" size={26} color="#0072b1" />
        ),
      }}
    />

   
 </Tab.Navigator>

  )
}


function Login_Stack(){

  return(
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='initial' component={HomeScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
      <Stack.Screen name='Signup' component={Signup}/>

      
      



    </Stack.Navigator>

  )
}





function HR_Stack({route}){

  const user=route.params;
  const HR=user.user

  return(
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen name='Tab' component={Tab2}  initialParams={{HR}} />
          <Stack.Screen name='Home' component={Home}  initialParams={{HR}}/>
        <Stack.Screen name='Employee' component={Employee}/>
        <Stack.Screen name='AddEmployee' component={AddEmployee}/>
        <Stack.Screen name='EmployeeDetails' component={EmployeeDetails}/>
        <Stack.Screen name='UpdateProfile' component={Update}/>
        <Stack.Screen name="PayRoll" component={PayRoll}/>
        <Stack.Screen name="Daterange" component={Daterange}/>
        <Stack.Screen name="Calculationpage" options={{headerShown:false}} component={CalculatePayroll}/>
        <Stack.Screen name="AttendanceHome" options={{headerShown:false}} component={AttendanceHome}/>
        <Stack.Screen name="Attendance" options={{headerShown:false}} component={Attendance}/>
        <Stack.Screen name="Task" options={{headerShown:false}} component={Task}/>
        <Stack.Screen name="Performance1" options={{headerShown:false}} component={Performance1}/>
      </Stack.Navigator>

  )
}



function Employee_stack({route}){

  const user=route.params;
  const HR=user.user

  const initialParams = {
    id: "6658de99d69f5ca8bb8345fb",
    location:{"coords": {"accuracy": 59.56100082397461, "altitude": -84.9000015258789, "altitudeAccuracy": 4.988143444061279, "heading": 0, "latitude": 6.9287613, "longitude": 79.8929126, "speed": 0}, "mocked": false, "timestamp": 1718814999511}

  }

  return(
    <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Tab2' component={Tab3}  initialParams={{HR}} />
    <Stack.Screen name='EmpScreen' component={EmpScreen} initialParams={{HR}}/>
   
    <Stack.Screen name="Mark" component={Mark}/>
    <Stack.Screen name="Loc" component={Loc}/>
    <Stack.Screen name="ViewEmployee" component={ViewEmployee}/>


 
      </Stack.Navigator>

  ) 
}






export default function App() {
  

  return (
    <NavigationContainer>

      
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name='Logi' component={Login_Stack}/>
       

        
        <Stack.Screen name='HR_Stack' component={HR_Stack} />
       <Stack.Screen name='Employee_stack' component={Employee_stack}/>


        
        
      
  
      </Stack.Navigator>
     
    
      

      
    </NavigationContainer>
  );
}

