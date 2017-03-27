/**
 * Created by AnTran on 3/26/17.
 */
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: "row",
        backgroundColor: "#b20001",
        padding: 10,
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "space-between"
    },
    textBar: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold"
    },
    leftOption: {
        flex: 0.2,
        alignItems: "flex-start"
    },
    rightOption: {
        flex: 0.2,
        alignItems: "flex-end"
    },
    title: {
        textAlign: "center",
        flex: 0.6,
        alignItems: "center"
    }
})