import React from 'react';
import { Text, View,ImageBackground, Button } from 'react-native';
import StyleButton from "../Button"
import styles from './style';

const CarItem = () => {
    return (
        <View style={styles.carContainer}>

            <ImageBackground
                source={require('../../assets/ModelX.jpeg')}
                style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>Model S</Text>
                <Text style={styles.subtitle}>Starting at $4534534</Text>
            </View>

            <StyleButton type="primary" content="Customf Order" onPress={() => {
                console.warn("Primary button is press");
            }
            } />

            <StyleButton type="Secondary" content="Exsiting Inventory" onPress={() => {
                console.warn("Exsiting button is press");
            }
            } />

        </View>
    );
};
export default CarItem;
