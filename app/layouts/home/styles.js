/**
 * Created by AnTran on 3/25/17.
 */
import { StyleSheet, Dimensions } from 'react-native'

// We can use this to make the overlay fill the entire width
var { width, height } = Dimensions.get('window');

export default StyleSheet.create({
    listView: {
        marginLeft: 10,
        marginRight: 10
    },
    loadingIndicator: {
        width: width,
        height: height,
        backgroundColor: '#ff000000',
        borderRadius: 5,
        position: 'absolute',
        opacity: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})