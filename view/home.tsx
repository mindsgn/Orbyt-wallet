import { connect } from 'react-redux';
import { createNewAccount } from '../redux/action';
import {Text, View} from 'react-native';



interface State {
}

interface OwnProps {
}

interface DispatchProps {
    login: (username: string, password: string) => void
}

interface StateProps {  
    accessToken: AccessToken
}
  

function Home(){
    return(
        <View>
            <Text style={{color: "black"}}>Home</Text>   
        </View>
    )
}

const mapStateToProps = () => {
}
  
const mapDispatchToProps = () => {
    return {
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(Home)