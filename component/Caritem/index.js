import React from 'react';
import { Text, View,ImageBackground, Button } from 'react-native';
import StyleButton from "../Button"
import styles from './style';

const CarItem = (props) => {
    const{cartitle}=props.car; 
    const{carsubtitle}=props.car; 
    const{price}=props.car;
    const{image}=props.car;
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={image}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}> {cartitle}</Text>
                <Text style={styles.subtitle}>{carsubtitle}<Text>{" "}</Text><Text style={styles.underline}>{price}</Text></Text>
            </View>

            <View  style={styles.allButton}>

            <StyleButton type="primary" content="Custom Order" onPress={() => {
                console.warn("Primary button is press");
            }
            } />

            <StyleButton type="Secondary" content="Exsiting Inventory" onPress={() => {
                console.warn("Exsiting button is press");
            }
            } />
            </View>

            

        </View>
    );
};
export default CarItem;
