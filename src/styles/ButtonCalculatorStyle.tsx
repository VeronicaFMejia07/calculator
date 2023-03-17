import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    sectionTouchable:{
        backgroundColor: 'white'
    },
    sectionButton:{
        height: 80,
        width: 80,
        backgroundColor: '#2D2D2D',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    SectionColorSecundary:{
        backgroundColor: 'purple',

    },
    SectionColorTertiary:{
        backgroundColor: 'green'
    },
    sectionButtonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '400'
    }
});