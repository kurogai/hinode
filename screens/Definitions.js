import { View, ScrollView, Text } from "react-native";
import BottonNav from "../components/BottonNav";

export const Definitions = (props)=>{
    function Option(param){
        const option = param.option;

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
                    <View style={{width:60, height:30, backgroundColor:"whitesmoke",
                transform:[
                    {
                        scaleX : (option === true) ? -1 : 1
                    }
                ]}}>
                        <View style={{
                            width:"50%",
                            height:"100%",
                            backgroundColor: (option === true) ? "green" : "red"
                        }}></View>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View>
                <View style={{
                    justifyContent : "center",
                    alignItems : "center",
                    marginTop : "25%"
                }}>
                    <ScrollView style={{
                        width:"95%",
                        height : "90%"
                    }}>
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
                            <Option notification="Notificações" option={true}/>
                            <Option notification="Atualizações Automáticas" option={false}/>
                            <Option notification="Modo Lite" option={true}/>
                        </View>
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}