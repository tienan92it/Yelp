/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import Yelp from './app/index';

// export default class Yelp extends Component {
//   render() {
//     return (
//       <View>
//       </View>
//     );
//   }
// }

AppRegistry.registerComponent('Yelp', () => Yelp);
