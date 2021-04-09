import React from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from './style';

const StyleButton = (props) => {
    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;

    const {type} = props;
    const {content} = props;
    const {onPress} = props;

    
    
    const backgroundColor = type ==='primary' ? 'black' : 'white' ;
    const textcolor = type === 'primary' ? 'white' : 'black' ;

    return (
        <View>
            <Pressable
                style={[styles.button , {backgroundColor : backgroundColor}]}
    
                onPress={() => 
                    onPress()

                }
            >
                <Text style = {{color : textcolor}}>{content}</Text>
            </Pressable>


        </View>

    );
};

export default StyleButton;