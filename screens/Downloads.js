import { View, ScrollView } from "react-native";
import BottonNav from "../components/BottonNav";
import { ItemDownload } from "../components/Downloads/ItemDownload";

export const Downloads = (props)=>{
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
                        <ItemDownload/>
                        <ItemDownload/>
                        <ItemDownload/>
                        <ItemDownload/>
                        <ItemDownload/>
                        <ItemDownload/>
                        <ItemDownload/>
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}