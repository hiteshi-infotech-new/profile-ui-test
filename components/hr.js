import React from 'react';
import {View} from 'react-native';
import { Colors } from '../global/Colors';

export default function Hr({style}) {
    return(
       <View style={[{
           borderColor: Colors.DoveGrey,
           borderWidth: 1
        }, style]}/>
    )
}