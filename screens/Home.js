import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from "react-native";
import BottonNav from "../components/BottonNav";
import MangaSearchResult from "../components/MangaSearchResult";

export const Home = (props)=>{
    return (
        <View style={{height:"100%", backgroundColor : "#F8EDEB"}}>
            <View>
                <View style={{
                    position : "absolute",
                    top : "5%",
                    left : "5%"
                }}>
                    <Text style={{ fontWeight : "bold" }}>Online</Text>
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
                         <Text>MangaTube</Text>
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
                        />
                         <Image style={{
                             width : "9%",
                             height : "100%"
                         }} source={require("../resources/icons/icons8-google-web-search-100.png")}/>
                     </View>
                    <ScrollView style={{
                        height : "57%"
                    }}>
                        <TouchableOpacity onPress={()=>{
                            props.navigator.navigate("ViewToDownload")
                        }}>
                            <MangaSearchResult/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            props.navigator.navigate("ViewToDownload")
                        }}>
                            <MangaSearchResult/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            props.navigator.navigate("ViewToDownload")
                        }}>
                            <MangaSearchResult/>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
}