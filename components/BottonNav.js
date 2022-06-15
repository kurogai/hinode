import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function BottonNav(props){
    return (
        <View style={botton.align}>
            <View style={botton.icon}>
                <TouchableOpacity style={{
                    width : "100%",
                    height : "100%"
                }}>
                    <Image style={{
                        width : "100%",
                        height : "100%"
                    }} source={require("../resources/icons/icons8-news-100.png")}/>
                </TouchableOpacity>
            </View>
            <View style={botton.icon}>
                <TouchableOpacity style={{
                    width : "100%",
                    height : "100%"
                }}>
                    <Image style={{
                        width : "100%",
                        height : "100%"
                    }} source={require("../resources/icons/icons8-downloads-folder-100.png")}/>
                </TouchableOpacity>
            </View>
            <View style={[botton.icon,{
                transform : [
                    { translateY : -40 }
                ],
                backgroundColor : "#F8EDEB",
                borderTopLeftRadius : 0,
                borderTopRightRadius : 0,
                borderBottomLeftRadius : 25,
                borderBottomEndRadius : 25,
                borderColor : "#F8EDEB",
                borderWidth : 8,
                minWidth : 75,
                minHeight : 75,
                position:"absolute",
                padding : 10
            }]}>
                <TouchableOpacity style={{
                    width : "100%",
                    height : "100%"
                }}>
                    <Image style={{
                        width : "100%",
                        height : "100%"
                    }} source={require("../resources/icons/icons8-search-100.png")}/>
                </TouchableOpacity>
            </View>
            <View style={botton.icon}/>
            <View style={botton.icon}>
                <TouchableOpacity style={{
                    width : "100%",
                    height : "100%"
                }}>
                    <Image style={{
                        width : "100%",
                        height : "100%"
                    }} source={require("../resources/icons/icons8-downloads-100.png")}/>
                </TouchableOpacity>
            </View>
            <View style={botton.icon}>
                <TouchableOpacity style={{
                    width : "100%",
                    height : "100%"
                }}>
                    <Image style={{
                        width : "100%",
                        height : "100%"
                    }} source={require("../resources/icons/icons8-settings-100.png")}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const botton = StyleSheet.create({
    align : {
        position : "absolute",
        right:0,
        bottom:0,
        width:"100%",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        backgroundColor : "#FCD5CE",
        borderTopLeftRadius : 25,
        borderTopRightRadius : 25
    },
    icon : {
        minWidth : 50,
        minHeight : 50,
        width : "5%",
        height : "5%",
        justifyContent : "space-around",
        alignItems : "center",
        margin : "3.5%",
        borderRadius : 25
    }
});