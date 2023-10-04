import { View,Text} from "react-native"

export function Genre({ name }){
  return(
    <View style={{
      paddingLeft:15,
      marginTop:10,
    }}>
      <View style={{
        width:97,
        height:30,
        marginTop:10,
        borderRadius:15,
        backgroundColor:"#fe6b38",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Text style={{color:"#ffffff",fontSize:12}}>{name}</Text>
      </View>
    </View>
  )
}