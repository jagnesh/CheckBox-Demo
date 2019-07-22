import {StyleSheet} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default  styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.lighter,
        flex:1,
        padding:10
    },
    itemStyle:{
        backgroundColor:Colors.white,
        marginTop:5,
        width:'100%',
        height:50,
        padding:10,
        alignItems:'center',
        flexDirection:'row'
    },
    itemTextStyle:{
        fontSize:16,
        marginLeft:10
    },
    checkboxIcon:{
        width:25,
        height:25,
        padding:10
    },
    countStyle:{
        fontSize:25,
        fontWeight:'700',
        color:Colors.primary,
        margin:20,
        alignSelf:'center'
    },
    countDigit:{
        fontSize:32,
        color:Colors.dark,
        marginLeft:15
    }
});