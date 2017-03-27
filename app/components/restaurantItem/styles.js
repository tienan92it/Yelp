/**
 * Created by AnTran on 3/25/17.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    detailContainer: {
        flex: 1,
        flexDirection: "column"
    },
    image: {
        height: 80,
        flex: 0.3,
        margin: 7,
        resizeMode: 'cover',
        borderRadius: 5
    },
    imageRating: {
        position: "absolute",
        left: -9999,
        overflow: "hidden",
        width: 1,
        height: 1,
    },
    textName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    textDetail: {
        fontSize: 12,
        color: "gray"
    },
    textAddress: {
        fontSize: 12,
        fontWeight: "bold",
    }
})