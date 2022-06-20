import { View, Text, Image } from "react-native";

export const GalleryMangaItem = (props)=>{
    return(
        <>
            <View style={{
                    width : "100%",
                    backgroundColor : "#e7f1f8",
                    padding : "3%",
                    margin : "1%",
                    borderRadius : 25,
                    elevation : 5
                }}>
                <View style={{
                    flexDirection : "row",
                    justifyContent : "space-between",
                }}>
                    <Text>{props.name}</Text>
                    <Image source={require("../../resources/icons/icons8-downloads-folder-100.png")} style={{
                        width : 20,
                        height : 20
                    }}/>
                </View>
            </View>
        </>
    );
}