import { View, ScrollView } from "react-native";
import BottonNav from "../components/BottonNav";
import { ItemLaunchManga } from "../components/Downloads/ItemLaunchManga";

export const Launch = (props)=>{
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
                        <ItemLaunchManga/>
                        <ItemLaunchManga/>
                        <ItemLaunchManga/>
                        <ItemLaunchManga/>
                        <ItemLaunchManga/>
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}