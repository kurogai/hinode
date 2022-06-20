import { View, Text, Image } from "react-native";

export const ItemDownload = (props)=>{
    return(
        <>
                <View style={{
                        width : "100%",
                        backgroundColor : "#e7f1f8",
                        padding : "3.5%",
                        margin : "1%"
                    }}>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignContent:"center",
                            paddingBottom : "5%"
                        }}>
                            <Text style={{
                                fontWeight : "bold",
                                fontSize : 14
                            }}>{props.title}</Text>
                            <View style={{
                                flexDirection:"row"
                            }}>
                                {(()=>{
                                    if(props.status === false) return (
                                        <>
                                            <Image source={require("../../resources/icons/icons8-eye-100.png")} style={{ 
                                                width : 20, height : 20, margin :2}}/>
                                            <Image source={require("../../resources/icons/icons8-close-100.png")} style={{ 
                                                width : 20, height : 20, margin :2}}/>
                                        </>
                                    ); else return(
                                        <>
                                            <Text style={{
                                                fontWeight : "bold",
                                                fontSize : 12
                                            }}>Acabado (clique aqui)</Text>
                                        </>
                                    );
                                })()}
                            </View>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignContent:"center"
                        }}>
                            <Text>Baixando <Text style={{fontWeight:"bold"}}>3</Text> páginas</Text>
                            <Text>112kbps / 12mb</Text>
                        </View>
                    </View>
        </>
    );
}