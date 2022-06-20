import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BottonNav from "../components/BottonNav";
import { ItemLaunchManga } from "../components/Downloads/ItemLaunchManga";

let size = [0,0,0,0];

export const ViewImage = (props)=>{
    const navigation = props.route.params.navigator;

    function Chapter(params){
        return (
            <View style={{
                backgroundColor : "green",
                width : "100%",
                height : 800,
                marginBottom : "2%"
            }}>
                <Text>Hello World</Text>
            </View>
        );
    }
    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View style={{
                marginTop : "15%",
                marginBottom : "5%",
                flexDirection : "row",
                justifyContent : "space-between",
                padding : "1%"
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
                        width:"100%"
                    }}>
                        {size.map((number, index)=>{
                            return <View key={index} style={{
                                width : "100%"
                            }}><Chapter number/></View>
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}