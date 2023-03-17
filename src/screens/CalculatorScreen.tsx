import React from 'react'
import { Text, View } from 'react-native'
import ButtonCalculator from '../components/ButtonCalculator';
import { styles } from '../styles/AppStyle';
import { useCalculator } from '../helpers/useCalculator';

const CalculatorScreen = () => {
    const { num, numPrevious, clean, positiveNegative, btnDelete, splitButton, showNumber, multiplyButton, subtractButton, addButton, calculate } = useCalculator();

    return (
        <View style={styles.sectionCalculator}>
            {/*Evalua si el numero anterior es diferente de 0*/}
            {
                (numPrevious !== '0') && (
                    <Text style={styles.sectionPreviousResult}>{numPrevious}</Text>
                )
            }
            <Text style={styles.sectionResult} numberOfLines={1} adjustsFontSizeToFit={true}>{num}</Text>

            {/*ROW 1*/}
            <View style={styles.sectionButtonRow}>
                <ButtonCalculator text='C' color='#9B9B9B' action={clean} />
                <ButtonCalculator text='+/-' color='#9B9B9B' action={positiveNegative} />
                <ButtonCalculator text='Del' color='#9B9B9B' action={btnDelete} />
                <ButtonCalculator text='/' color='#E96479' action={splitButton} />
            </View>

            {/*ROW 2*/}
            <View style={styles.sectionButtonRow}>
                <ButtonCalculator text='7' action={showNumber} />
                <ButtonCalculator text='8' action={showNumber} />
                <ButtonCalculator text='9' action={showNumber} />
                <ButtonCalculator text='x' color='#E96479' action={multiplyButton} />
            </View>

            {/*ROW 3*/}
            <View style={styles.sectionButtonRow}>
                <ButtonCalculator text='4' action={showNumber} />
                <ButtonCalculator text='5' action={showNumber} />
                <ButtonCalculator text='6' action={showNumber} />
                <ButtonCalculator text='−' color='#E96479' action={subtractButton} />
            </View>

            {/*ROW 4*/}
            <View style={styles.sectionButtonRow}>
                <ButtonCalculator text='1' action={showNumber} />
                <ButtonCalculator text='2' action={showNumber} />
                <ButtonCalculator text='3' action={showNumber} />
                <ButtonCalculator text='+' color='#E96479' action={addButton} />
            </View>

            {/*ROW 5*/}
            <View style={styles.sectionButtonRow}>
                <ButtonCalculator text='0' btnWidth action={showNumber} />
                <ButtonCalculator text='.' action={showNumber} />
                <ButtonCalculator text='=' color='#E96479' action={calculate} />
            </View>
        </View>
    )
}

export default CalculatorScreen
