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
                        <ItemDownload title="Naruto Shippuden Cap 7" status={true}/>
                        <ItemDownload title="Dragon Ball Cap 53" status={false}/>
                        <ItemDownload title="Dragon Ball Cap 115" status={false}/>
                        <ItemDownload title="Mermaid Kobayashi Cap 11" status={true}/>
                        <ItemDownload title="American Ninja Cap 99" status={true}/>
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}