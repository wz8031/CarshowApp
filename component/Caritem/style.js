
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    carContainer: {
        width:'100%',
        height:'100%',
      },
    
      titles: {
        marginTop: '30%', 
        width: '100%',
        alignItems: 'center',
    
    
      },
    
      title: {
        fontSize: 40,
        fontWeight: 'bold',
      },
    
      subtitle: {
        fontSize:16,
        color:'grey'
      },
    
      image:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute'
      },

      allButton:{
        top:440,
        width:'100%',
        flex:1,
        // padding: '10',
        

    },

    underline:{
      textDecorationLine: 'underline'
    }

});

export default styles;