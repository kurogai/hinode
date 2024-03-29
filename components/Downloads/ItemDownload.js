import { useState, useEffect } from "react";
import { View, Text, Image, ToastAndroid, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { SourceList } from "../../controllers/classes/Sources";
import { updateDownloadCount } from "../../redux/features/download";

import * as MediaLibrary from "expo-media-library";

export const ItemDownload = (props)=>{
    //const [pageSize, setSize] = useState(0);
    const [downloaded, setDownloaded] = useState(false);
    const targetChapter = useSelector((state)=> state.download)[props.index];
    const source = SourceList[props.source];
    const dispatch = useDispatch();

    useEffect(()=>{
        // check first about gallery modify option
        const start = ()=>{
            MediaLibrary.getPermissionsAsync().then((status)=>{
                if(status.granted){
                    ToastAndroid.show("Baixando...",3);
                    
                    for(let page = 1; page <= 254; page++){
                        source.download(props.link, props.index, page, status =>{
                            if(status == true){
                                dispatch(updateDownloadCount({
                                    manga : targetChapter.manga
                                }));
                            }else{
                                setDownloaded(true);
                            }
                        });
                    }
                }else{
                    Alert.alert(
                        "Sem permissões montar as pastas",
                        "O Hinode precisa de permissões para poder criar, alterar e excluir imagens "+
                        ", alem de montar seu próprio diretório no seu celular, porfavor aceite a permissão"+
                        "pra autorizar e prosseguir com o download.",
                        [
                            {
                                "text" : "Permitir",
                                "onPress" : async ()=>{
                                    const givePermissions = await MediaLibrary.requestPermissionsAsync();
                                    if(givePermissions.granted){
                                        ToastAndroid.show("Permissões dadas",4);
                                        start();
                                    }
                                }
                            },
                            {
                                "text" : "Não Permitir",
                                "onPress" : async ()=>{
                                    Alert.alert("Erro","Não vai ser possível iniciar este download por falta de permissões");
                                }
                            }
                        ]
                        )
                }
            })
        }
        
        start();

    },[]);

    const [seconds, setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(()=>{
           setSeconds(seconds + 1)
        },1000);
        return ()=> clearInterval(interval);
    },[seconds]);

    return(
        <>
                <View style={{
                        width : "100%",
                        backgroundColor : "#e7f1f8",
                        padding : "3.5%",
                        margin : "1%"
                    }}>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignContent:"center",
                            paddingBottom : "5%"
                        }}>
                            <Text style={{
                                fontWeight : "bold",
                                fontSize : 14
                            }}>{props.name}</Text>
                            <View style={{
                                flexDirection:"row"
                            }}>
                                {(()=>{
                                    if(downloaded === false) return (
                                        <>
                                            <Image source={require("../../resources/icons/icons8-eye-100.png")} style={{ 
                                                width : 20, height : 20, margin :2}}/>
                                            <Image source={require("../../resources/icons/icons8-close-100.png")} style={{ 
                                                width : 20, height : 20, margin :2}}/>
                                        </>
                                    ); else if (downloaded == "404") return (
                                        <>
                                            <Text style={{
                                                fontWeight : "bold",
                                                fontSize : 12,
                                                color : "red"
                                            }}>Erro</Text>
                                        </>
                                    ); else return(
                                        <>
                                            <Text style={{
                                                fontWeight : "bold",
                                                fontSize : 12
                                            }}>Acabado</Text>
                                        </>
                                    );
                                })()}
                            </View>
                        </View>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"space-between",
                            alignContent:"center"
                        }}>
                            <Text>Baixado <Text style={{fontWeight:"bold"}}>{targetChapter.downloaded}</Text> páginas</Text>
                            {/*<Text>112kbps / 12mb</Text>*/}
                        </View>
                    </View>
        </>
    );
}