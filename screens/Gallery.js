import { useEffect } from "react";
import { useState } from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import BottonNav from "../components/BottonNav";
import { GalleryMangaItem } from "../components/Gallery/GalleryMangaItem";
import { mangaList } from "../redux/features/mangaList";
import * as MediaLibrary from "expo-media-library";

const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

export const Gallery = (props)=>{
    const [orderBy, setOrderBy] = useState(null);
    const [mangaName, setMangaName] = useState([]);

    const [folder, setFolder] = useState([]);

    let newList;
    newList = mangaName.filter((item)=> item[0] === orderBy || orderBy === null).sort((a,b)=>{
        if(a < b) return -1;
        if(a > b) return 1;
        return 0;
    });

    function load(){
        MediaLibrary.getAssetsAsync("Hinode/downloads",).then((result)=>{
            let state = result.assets
            state.map((item)=>{
                let name = item.uri.split("/")[9];
                name[0] = name[0].toUpperCase();
                //state.push("a");
                
                //console.log(name)
            });
        });
    }
    // resumir daqui, montar os componentes e os seus nomes manualmente
    //load();
    //console.log(folder);
    
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