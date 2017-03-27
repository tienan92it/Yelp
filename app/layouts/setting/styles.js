/**
 * Created by AnTran on 3/26/17.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    body: {
        flex: 0.95,
        flexDirection: "column",
        margin: 10
    },
    switchBox: {
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "gray",
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    switchLabel: {
        color: "black",
        fontSize: 16,
        textAlign: "left"
    },
    commonBox: {
        marginTop: 5,
        marginBottom: 5
    },
    categoryBox: {
        height: 40,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: "gray",
        paddingLeft: 10,
        paddingTop: 5,
        paddingRight: 10,
        paddingBottom: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textSeeAll: {
        textAlign: "center",
        color: "gray",
        flex: 1
    }
})