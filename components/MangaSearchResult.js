import { View, Text, TouchableOpacity } from "react-native";
 
export default function MangaSearchResult(props){
    return (
        <View style={{width:"100%", marginTop : "5%"}}>
            <View style={{
                    backgroundColor : "white",
                    flexDirection : "row"
                }}>
                    <View style={{width:"20%", maxHeight : 100}}>
                        <View style={{
                            width : "100%",
                            height : "100%",
                            backgroundColor : "weat"
                        }}/>
                    </View>
                    <View style={{width:"70%", 
                    justifyContent : "space-between",
                    padding : "1%"
                }}>
                        <Text>Manga Title</Text>
                        <Text>Manga Description askshaidhidsadiniusadnsaidbsadibsdai </Text>
                    </View>
                    {/*
                    //? Talvez nao seja necessario meter o icone da imagem?
                    <View style={{width:"20%", 
                    justifyContent : "flex-end",
                    alignItems : "center",
                    padding : "3%"
                }}>
                        <Image style={{
                            width : "100%",
                            height : "20%"
                        }} source={require("../resources/icons/icons8-eye-100.png")}/>
                    </View>
                    */}
            </View>
        </View>
    );
}