import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    menuItems: {
        marginTop: 20,
        marginLeft: 20, /*20 to keep it aligned with the other one we did earlier */
        marginRight: 20
    },

    icon: {
        color: "white"
    },

    menuText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginLeft: 15
    },

    menuRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        marginBottom: 15
    },

    menuTextBox: {
        flexGrow: 1, /* media part grows as much as it possibly can on the screen */
        textTransform: "uppercase"
    },

    arrowIcon: {
        color: "#4D4D4E"
    },

    subTitle: {
        color: "grey",
        fontSize: 14,
        marginLeft: 15
    }

})

export default styles;