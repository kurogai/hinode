import { View, Text, Image } from "react-native";

export const ItemLaunchManga = ()=>{
    return(
        <>
                <View style={{
                        width : "100%",
                        backgroundColor : "#e7f1f8",
                        padding : "1%",
                        margin : "1%"
                    }}>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignContent:"center"
                        }}>
                            <View style={{
                                width:"30%",
                                backgroundColor:"black"
                            }}>

                            </View>
                            <Text>Naruto Shippuden</Text>
                            <Image source={require("../../resources/icons/icons8-ibooks-100.png")} style={{
                                width : 40,
                                height : 40
                            }}/>
                        </View>
                    </View>
        </>
    );
}