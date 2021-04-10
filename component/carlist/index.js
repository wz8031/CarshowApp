import React, { Component } from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './style';
import cars from './cars';
import Caritem from '../Caritem';

const Carlist = (props) =>{

    return(
        <View style={styles.container}>
            <FlatList 

            data={cars}
            renderItem={({item}) => <Caritem car={item}/>}

            />
        </View>
    );

}

export default Carlist;