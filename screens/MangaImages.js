import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BottonNav from "../components/BottonNav";
import { ItemLaunchManga } from "../components/Downloads/ItemLaunchManga";

let size = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

export const MangaImages = (props)=>{
    const navigation = props.route.params.navigator;

    function Chapter(params){
        return (
            <TouchableOpacity style={{
                width : 89,
                height : 89,
                justifyContent : "center",
                alignItems : "center",
                backgroundColor : "#FEC89A",
                margin : "1%",
                borderColor : "black",
                borderWidth : 0.2
            }} onPress={()=> navigation.navigate("ViewImage",{
                navigator : navigation
            })}>
                <View>
                    <Text>{params.number}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View style={{
                marginTop : "15%",
                marginBottom : "5%",
                flexDirection : "row",
                justifyContent : "space-between",
                width : "100%",
                padding : "2%"
            }}>
                <TouchableOpacity onPress={()=> navigation.goBack()}>
                    <View style={{
                        width : 35,
                        height : 35,
                        backgroundColor : "black",
                        borderRadius : 25
                    }}></View>
                </TouchableOpacity>
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
                        <View style={{
                            flexDirection : "row",
                            flexWrap : "wrap",
                            justifyContent : "flex-start"
                        }}>
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