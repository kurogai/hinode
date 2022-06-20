import { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BottonNav from "../components/BottonNav";
import { GalleryMangaItem } from "../components/Gallery/GalleryMangaItem";

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const mangaName = [
    "Naruto Shippuden", 
    "Jujutsu Kaizen",
    "Dragon Ball", 
    "American Ninja",
    "Fairy Tail",
    "Re-Zero",
    "Fate-Two",
    "One Punch Man",
    "Hunter X Hunter",
    "Mermaid Dragon Konbayashi",
    "Nanatsu no Taizai"
];

export const Gallery = (props)=>{
    const [orderBy, setOrderBy] = useState(null);
    let newList;
    newList = mangaName.filter((item)=> item[0] === orderBy || orderBy === null).sort((a,b)=>{
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });

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
                        {alphabet.map((letter,index)=>{
                            return (
                                <TouchableOpacity key={index} onPress={()=> setOrderBy(letter)}>
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
                        <TouchableOpacity onPress={()=> setOrderBy(null)}>
                            <View style={{
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
                                }}>Tudo</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{
                        width:"95%",
                        height : "70%"
                    }}>
                        {newList.map((item,index)=>{
                            return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=> props.navigator.navigate("MangaGallery",{
                                        navigator : props.navigator
                                    })}>
                                        <GalleryMangaItem name={item}/>
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
            <BottonNav/>
        </View>
    );
}