/*Components*/
import {Platform, StyleSheet} from "react-native";
/*Utils*/
import {FontSize, relativeWidth} from "src/utils";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#f1f1f1',
    },
    headerStyle: {
        height: 56,
        backgroundColor: 'white',
        marginTop: Platform.OS === "ios" ? 20 : 0,
        justifyContent: 'center',
        elevation: 5,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
    },
    headerTextStyle: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
        fontSize: FontSize.fontXLarge
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 5,
        margin: relativeWidth(1),
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: relativeWidth(2)
    },
    profileImage: {
        borderRadius: 100,
        height: relativeWidth(20),
        width: relativeWidth(20),
        marginEnd: relativeWidth(5)
    },
    primaryTextStyle: {
        flex: 1,
        justifyContent: 'center',
    },
    secondaryTextStyle: {
        fontWeight: "200"
    },
    quickActionContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    quickActionButtonStyle: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        margin: relativeWidth(2),
        backgroundColor: 'red',
        padding: relativeWidth(5),
    },
    quickActionButtonTextStyle: {
        alignSelf: 'center',
        textAlign: 'right',
        color: 'white',
    },
});

export default styles;