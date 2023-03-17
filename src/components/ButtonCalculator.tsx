import React from 'react'
import { Text, TouchableNativeFeedback,View } from 'react-native'
import { styles } from '../styles/ButtonCalculatorStyle';

interface IPropsButton {
    text: string,
    color?: string,
    btnWidth?: boolean,
    action: (numText:string) => void
}

const ButtonCalculator = ({ text, color='#2D2D2D', btnWidth = false, action }: IPropsButton) => {

    return (
        <TouchableNativeFeedback onPress={() => action(text)} style={styles.sectionTouchable}  background={TouchableNativeFeedback.Ripple('', true, 30)}>
            <View 
                style={{...styles.sectionButton, 
                    backgroundColor:color,
                    width: (btnWidth) ? 180 : 80
                }}
            >
                <Text 
                    style={{...styles.sectionButtonText,
                        color: (color === '#9B9B9B') ? 'black' : 'white'
                    }}
                >
                    {text}
                </Text>
            </View>
        </TouchableNativeFeedback>
    )
}

export default ButtonCalculator
