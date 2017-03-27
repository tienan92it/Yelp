import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: "row",
        backgroundColor: "#b20001",
        padding: 10,
        paddingTop: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    searchBar: {
        paddingLeft: 20,
        fontSize: 16,
        flex: 0.8,
        backgroundColor: '#ffffff',
        borderRadius: 5,
    },
    filterButton: {
        paddingTop:6,
        paddingBottom: 6,
        flex: 0.2,
        color: "white",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#8b8b8b',
        backgroundColor: '#b20001',
        marginRight: 10,
        textAlign: "center",
        fontSize: 14,
    }
})
