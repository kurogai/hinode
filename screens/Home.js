import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import MangaSearchResult from "../components/MangaSearchResult";
import ModalDropdown from 'react-native-modal-dropdown';

import { SourceList } from "../controllers/classes/Sources";
import { mangaList } from "../redux/features/mangaList";
import { useDispatch } from "react-redux";

export const Home = (props)=>{
    const [online, setOnline] = useState(false);
    const [source, setSource] = useState(0);
    const [searchList, setSearchList] = useState([]);
    const [mangaName, setMangaName] = useState();

    async function search(name){
        let list = await SourceList[source].search(name);
        setSearchList(list);
    }

    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View>
                <View style={{
                    position : "absolute",
                    top : "5%",
                    left : "5%"
                }}>
                    <Text style={{ fontWeight : "bold" }}>{(()=>{
                        if(online == true) return "Online";
                        else return "Offline" 
                    })()}</Text>
                </View>
                <View style={{
                    justifyContent : "flex-start",
                    alignItems : "center",
                    marginTop : "25%"
                }}>
                    <View style={{elevation:10, borderRadius:35}}>
                    <Image style={{
                        minWidth : 100,
                        minHeight : 100,
                        width : "5%",
                        height : "5%",
                        borderRadius: 100
                    }} source={require("../resources/images/server1.jpeg")} resizeMethod={"scale"} resizeMode={"cover"}/>
                    </View>
                     <Text style={{fontWeight:"bold", margin : "1%"}}>Servidor</Text>
                     <View style={{
                         width : "50%",
                         backgroundColor : "#A3FFA1",
                         justifyContent : "center",
                         alignItems : "center",
                         padding : "2%",
                         margin : "1%",
                         borderRadius : 25
                     }}>
                         <ModalDropdown defaultValue={"MangaTube"} options={['MangaTube', 'Crunchyroll']} dropdownStyle={{
                             backgroundColor : "black"
                         }} onSelect={(select)=> setSource(select)}/>
                     </View>

                     <View style={{
                         width : "80%",
                         backgroundColor : "whitesmoke",
                         flexDirection : "row",
                         justifyContent : "space-between",
                         alignItems : "center",
                         padding : "3%",
                         margin : "1%",
                         borderRadius : 25
                     }}>
                         <TextInput 
                            style={{
                                maxWidth : "85%"
                            }}
                            placeholder="Pesquise centenas de mangas"
                            onChangeText={(data)=> setMangaName(data)}
                        />
                        <TouchableOpacity style={{
                                width : "9%",
                                height : "100%"
                            }} onPress={()=>{
                                setSearchList([]);
                                search(mangaName)
                            }}>
                                <Image style={{
                                    width : 25,
                                    height : 25
                                }} source={require("../resources/icons/icons8-google-web-search-100.png")}/>
                        </TouchableOpacity>
                     </View>
                    <ScrollView style={{
                        height : "57%"
                    }}>
                        {searchList.map((item,index)=>{
                            if(typeof(item.title) !== undefined && typeof(item.img) != String) return (
                                <View key={index}>
                                    <TouchableOpacity onPress={()=>{
                                        props.navigator.navigate("ViewToDownload",{
                                            title : item.title,
                                            autor : item.autor,
                                            img : item.img,
                                            url : item.url,
                                            source : source,
                                            address : item.address
                                        })
                                    }}>
                                        <MangaSearchResult title={item.title} autor={item.autor} img={item.img} url={item.url} source={source} address={item.address} />
                                    </TouchableOpacity>
                                </View>
                            );
                        })}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}