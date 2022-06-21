import { View, Text, TouchableOpacity, Image} from "react-native";
 
export default function MangaSearchResult(props){
    return (
        <View style={{width:"100%", marginTop : "5%"}}>
            <View style={{
                    backgroundColor : "white",
                    flexDirection : "row"
                }}>
                    <View style={{width:"20%", maxHeight : 100}}>
                        <Image style={{
                            width : "100%",
                            height : "100%"
                        }} resizeMethod={"scale"} resizeMode={"cover"} source={{uri : props.img}}/>
                    </View>
                    <View style={{width:"70%", 
                    justifyContent : "space-between",
                    padding : "1%"
                }}>
                        <Text>{props.title}</Text>
                        <Text>{props.autor}</Text>
                    </View>
            </View>
        </View>
    );
}