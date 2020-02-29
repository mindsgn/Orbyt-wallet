/**
 * @format
 */
import 'react-native-gesture-handler';
import "./shim";
import {AppRegistry} from 'react-native';
import Home from './screens/Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
