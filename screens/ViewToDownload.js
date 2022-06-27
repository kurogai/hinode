import { useState, useEffect } from "react";
import { View, ScrollView, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { useDispatch } from "react-redux";
import { SourceList } from "../controllers/classes/Sources";
import { newDownload } from "../redux/features/download";


export const ViewToDownload = (props)=>{
    const dispatch = useDispatch();
    const [chapter, setChatper] = useState();
    const [pageNumber, setPageNumber] = useState(1);
    const [loading,setLoading] = useState();

    let source = SourceList[props.route.params.source];

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
                margin : "0.3%"
            }} onPress={()=> {
                dispatch(newDownload({
                    manga : `${params.name} Cap ${params.number}`,
                    link : params.link,
                    chapter : params.number,
                    status : false,
                    source : props.route.params.source
                }));
                
            }}>
                <View style={{
                    width : "100%",
                    flexDirection : "row",
                    justifyContent : "space-between"
                }}>
                    <Text>Chapter {params.number}</Text>
                    <Text>Download</Text>
                </View>
            </TouchableOpacity>
        );
    }

    function renderList(){
        if(typeof(chapter) !== undefined){
            return (chapter?.map((element,index)=> <View key={index}>
                <Chapter name={element.name} number={element.number} link={element.link}/>
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
            <View style={{
                height : "70%"
            }}>
                <TouchableOpacity style={{
                    width : "100%",
                    justifyContent : "center",
                    backgroundColor : "wheat",
                    alignItems : "center",
                    padding : "2%",
                    height : "10%"
                }} onPress={()=>{
                    getPages(pageNumber);
                    setPageNumber(pageNumber - 1);
                }}>
                    <Text>Recuar</Text>
                </TouchableOpacity>
                <View style={{
                    justifyContent : "center",
                    alignItems : "center"
                }}>
                    <ScrollView style={{
                        height : "70%"
                    }}>
                        {(loading == "notReady") ? <Text>Carregando...</Text> : renderList()}
                    </ScrollView>      
                </View>
                <TouchableOpacity style={{
                    width : "100%",
                    justifyContent : "center",
                    backgroundColor : "wheat",
                    alignItems : "center",
                    padding : "2%",
                    height : "10%"
                }} onPress={()=>{
                    if(pageNumber < 0) setPageNumber(1);
                    else setPageNumber(pageNumber + 1);
                    setLoading("notReady");
                    getPages(pageNumber);
                }}>
                    <Text>Carregar Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}