import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "orange"
    },

    header: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },

    headerTitle: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",

    },

    icon: {
        color: "white"
    },

    backgroundImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
    },

    batterySection: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },

    batteryImage: {
        width: 70,
        height: 26,
        marginRight: 12
    },

    batteryText: {
        color: "white",
        fontSize: 35,
        fontWeight: "bold",

    },

    status: {
        alignItems: "center",
        justifyContent: "center",
    },

    statusText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"

    },

    controls: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 175, /* To make it go below our image on the page, just play around with the number */
    
    },
    /*Adding a round on each button icon*/
    controlsButton: {
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 50, /* Makes it round */
        padding: 18, /* Creates spacing inside the circles */
        marginLeft: 25,
    }
})

export default styles;