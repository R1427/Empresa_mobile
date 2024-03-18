import{ createNativeStackNavigator} from '@react-navigation/native-stack'
import  Welcome from '../pages/Welcome'
import Signin from '../pages/Signin';
import { NavigationContainer } from '@react-navigation/native';


const stack = createNativeStackNavigator();


export default function Routes() {
    return(
        <NavigationContainer>
        <stack.Navigator>
            <stack.Screen
                name="Welcome"
                component={Welcome}
                options={{headerShown: false}}
            />
        </stack.Navigator>
        
        <stack.Navigator>
                <stack.Screen
                    name="Signin"
                    component={Signin}
                    options={{headerShown: false}}
                />


            </stack.Navigator>
            
            </NavigationContainer>

    )
}


