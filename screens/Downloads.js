import { View, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import BottonNav from "../components/BottonNav";
import { ItemDownload } from "../components/Downloads/ItemDownload";

export const Downloads = (props)=>{
    const downloadList = useSelector((state)=> state.download);

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
                        {downloadList.map((element,index)=> <View key={index}><ItemDownload index={index} name={element.manga} link={element.link} status={element.status} source={element.source}/></View>)}
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}