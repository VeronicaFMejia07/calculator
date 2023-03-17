import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fund:{
        flex: 1,
        backgroundColor: 'black',
    },
    sectionCalculator:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    sectionPreviousResult:{
        color: 'rgba(255,255,255, 0.5)',
        fontSize: 30,
        textAlign: 'right',
        paddingHorizontal: 10
    },
    sectionResult: {
        color: '#fff',
        fontSize: 60,
        textAlign: 'right',
        paddingHorizontal: 5,
        marginBottom: 10
    },
    sectionButtonRow:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    
});