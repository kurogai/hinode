import { View, Text, ScrollView } from "react-native";

export const GalleryMangaItem = ()=>{
    function Option(param){
        return(
            <View style={{
                flexDirection : "row",
                justifyContent : "space-between",
                alignItems : "center",
                margin : "1%"
            }}>
                <View>
                    <Text>{param.notification}</Text>
                </View>
                <View>
                    <View style={{width:60, height:30, backgroundColor:"black"}}></View>
                </View>
            </View>
        );
    }
    return(
        <>
            <View style={{
                    width : "100%",
                    backgroundColor : "#e7f1f8",
                    padding : "3%",
                    margin : "1%"
                }}>
                <View>
                    <Text style={{
                        fontWeight : "bold",
                        fontSize : 22
                    }}>Definições Gerais</Text>
                </View>
                <Option notification="Notificações"/>
                <Option notification="Atualizações Automáticas"/>
                <Option notification="Modo Lite"/>
            </View>
        </>
    );
}