import { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SourceList } from "../controllers/classes/Sources";

export const ViewToDownload = (props)=>{
    const [chapter, setChatper] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [loading,setLoading] = useState();
    let manga = SourceList[props.route.params.source];

    function getPages(number){
        SourceList[0].getChapterList(props.route.params.url, props.route.params.address, number,(item,status)=> {
            setChatper(item);
            setLoading("ready");
        });
    }

    useEffect(()=>{
        setLoading("notReady");
        setTimeout(()=>{
            getPages(1)
        },1000);
    },[]);

    function Chapter(params){
        return (
            <TouchableOpacity style={{
                width : "100%",
                height : "auto",
                justifyContent : "space-between",
                alignItems : "center",
                backgroundColor : "#FEC89A",
                borderColor : "black",
                borderWidth : 0.2,
                flexDirection : "row",
                padding : "5%",
                margin : "1%"
            }}>
                <View>
                    <Text>Chapter {params.number}</Text>
                </View>
                <View>
                    <Text>Download</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function renderList(){
        if(typeof(chapter) !== undefined){
            return (chapter?.map((element,index)=> <View key={index}>
                <Chapter number={element.number}/>
            </View>))
        }
    }

    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View style={{
                position : "absolute",
                marginTop : "15%",
                zIndex : 1,
                flexDirection : "row",
                justifyContent : "space-between",
                width : "100%",
                padding : "2%"
            }}>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Home")}>
                    <View style={{
                        width : 35,
                        height : 35,
                        backgroundColor : "black",
                        borderRadius : 25
                    }}></View>
                </TouchableOpacity>
            </View>
            <Image style={{
                width : "100%",
                height : "30%",
                backgroundColor : "red",
                marginTop : "10%",
                marginBottom : "2%"
            }} source={{ uri : props.route.params.img }}/>
            <View>
                <View style={{
                    justifyContent : "center",
                    alignItems : "center"
                }}>
                <TouchableOpacity style={{
                    width : "100%",
                    justifyContent : "center",
                    backgroundColor : "wheat",
                    alignItems : "center",
                    padding : "2%"
                }} onPress={()=>{
                    getPages(pageNumber);
                    setPageNumber(pageNumber - 1);
                }}>
                    <Text>Recuar</Text>
                </TouchableOpacity>
                <ScrollView style={{
                    height : "70%"
                }}>
                    {(loading == "notReady") ? <Text>Carregando...</Text> : renderList()}
                    <View style={{
                        width : "100%",
                        height : "auto",
                        justifyContent : "space-between",
                        alignItems : "center",
                        borderColor : "black",
                        borderWidth : 0.2,
                        flexDirection : "row",
                        padding : "5%",
                        margin : "1%"
                    }}></View>
                </ScrollView>
                    
                </View>
                <TouchableOpacity style={{
                    width : "100%",
                    justifyContent : "center",
                    backgroundColor : "wheat",
                    alignItems : "center",
                    padding : "2%"
                }} onPress={()=>{
                    if(pageNumber < 0) setPageNumber(1);
                    else setPageNumber(pageNumber + 1);
                    getPages(pageNumber);
                }}>
                    <Text>Carregar Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}