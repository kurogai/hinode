import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BottonNav from "../components/BottonNav";
import { ItemLaunchManga } from "../components/Downloads/ItemLaunchManga";

let size = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

export const ViewToDownload = (props)=>{
    function Chapter(params){
        return (
            <TouchableOpacity style={{
                width : "100%",
                height : "auto",
                justifyContent : "space-between",
                alignItems : "center",
                backgroundColor : "#FEC89A",
                borderColor : "black",
                borderWidth : 0.2,
                flexDirection : "row",
                padding : "5%",
                margin : "1%"
            }}>
                <View>
                    <Text>Chapter {params.number}</Text>
                </View>
                <View>
                    <Text>Download</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View style={{
                position : "absolute",
                marginTop : "15%",
                zIndex : 1,
                flexDirection : "row",
                justifyContent : "space-between",
                width : "100%",
                padding : "2%"
            }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
                    <View style={{
                        width : 35,
                        height : 35,
                        backgroundColor : "black",
                        borderRadius : 25
                    }}></View>
                </TouchableOpacity>
            </View>
            <View style={{
                width : "100%",
                height : "30%",
                backgroundColor : "red",
                marginTop : "10%",
                marginBottom : "2%"
            }}>
            </View>
            <View>
                <View style={{
                    justifyContent : "center",
                    alignItems : "center"
                }}>
                    <ScrollView style={{
                        width:"95%",
                        height : "90%"
                    }}>
                        <View>
                            {size.map((number, index)=>{
                                return <View key={index}><Chapter number={index + 1}/></View>
                            })}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}