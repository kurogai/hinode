import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BottonNav from "../components/BottonNav";
import { GalleryMangaItem } from "../components/Gallery/GalleryMangaItem";

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export const Gallery = (props)=>{
    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View>
                <View style={{
                    justifyContent : "center",
                    alignItems : "center",
                    marginTop : "25%"
                }}>
                    <View style={{
                        width:"90%",
                        flexDirection:"row",
                        flexWrap : "wrap",
                        justifyContent : "flex-start",
                        marginBottom : "10%",
                        backgroundColor:"#FFD7BA",
                        padding : "2%",
                        borderRadius:25
                    }}>
                        {alphabet.map((letter)=>{
                            return (
                                <TouchableOpacity>
                                    <View style={{
                                        width : 28,
                                        height : 28,
                                        backgroundColor : "white",
                                        margin : "1%",
                                        justifyContent:"center",
                                        alignItems:"center",
                                        borderRadius : 25,
                                        padding : "1%"
                                    }}>
                                        <Text style={{
                                            fontSize: 20,
                                            justifyContent:"center"
                                        }}>{letter}</Text>
                                    </View>
                                </TouchableOpacity>
                            );
                        })}
                    </View>
                    <ScrollView style={{
                        width:"95%",
                        height : "70%"
                    }}>
                        <GalleryMangaItem/>
                        <GalleryMangaItem/>
                        <GalleryMangaItem/>
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}