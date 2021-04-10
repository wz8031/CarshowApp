import React from 'react';
import { Text, View,ImageBackground, Button } from 'react-native';
import StyleButton from "../Button"
import styles from './style';

const CarItem = (props) => {
    const{cartitle}=props; 
    const{carsubtitle}=props; 
    const{price}=props;
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/ModelX.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}> {cartitle}</Text>
                <Text style={styles.subtitle}>{carsubtitle}<Text>{" "}</Text>{price}</Text>
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
