import { View, Text, Image, ScrollView, TouchableOpacity , FlatList} from "react-native";
import { Ionicons, Feather, FontAwesome,AntDesign } from '@expo/vector-icons';
import { useState, useEffect ,useCallback} from "react"
import  axios  from "axios"

//componentes
import { DescriptionsList } from "../components/descriptionsList.component";
import { SeparatorLine } from "../components/separateLine.component"



export default function Manga({ navigation, route }){
	const [moreDescription,setMoreDescription] = useState(false);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
  	
    const fetchChapters = async () => {
      try {
        const response = await axios.get(
          `https://api.mangadex.org/manga/${route.params.item.id}/aggregate?translatedLanguage[]=pt-br&translatedLanguage[]=en`
        );

        if (response.data && response.data.volumes) {
          const chapterList = [];
          const volumes = Object.values(response.data.volumes);
          
          volumes.forEach((volume) => {
            if (volume.chapters) {
              chapterList.push(...Object.values(volume.chapters));
            }
          });

          setChapters(chapterList);
        }
      } catch (error) {
        console.error('wrong:', error);
      }
    };

    fetchChapters();
  }, [route.params.item.id]);

  const renderItem = ({ item }) => (
    <View style={{
    	alignItems:"center"
    }}>
      <Text
        onPress={() => {
          navigation.navigate("Read",{id:item.id})
        }}
        style={{ fontSize: 16, padding: 10 }}
      >
        Chapter {item.chapter}
      </Text>
    </View>
  );
	
	return (
		<ScrollView vertical={true} showsVerticalScrollIndicator={false} style={{backgroundColor:"#ffffff",width:"100%",height:"100%"}}> 
			<View style={{
				marginTop:35,
				paddingLeft:10,
				display:"flex",
				alignItems:"center",
				justifyContent:"space-between",
				flexDirection:"row"
			}}>
				<TouchableOpacity onPress={()=>{navigation.goBack()}}>
					<Image 
						style={{
							width:45,
							height:45,
						}}
						source={require("../../assets/icones/arrow.png")}
					/>
				</TouchableOpacity>

				<View style={{
					flexDirection:"row",
					margin:10,
					paddingLeft:10
				}}>
					<TouchableOpacity > 
						<Ionicons name="heart-outline" style={{marginLeft:10}} size={30} color="#000000" />
					</TouchableOpacity>
					<TouchableOpacity> 
						<Feather name="download"  style={{marginLeft:10}} size={30} color="#000000" />
					</TouchableOpacity>
					<TouchableOpacity> 
						<Ionicons name="bookmark-outline" style={{marginLeft:10}} size={30} color="#000000" />
					</TouchableOpacity>
				</View>
			</View>

			<View style={{ flexDirection: 'row',marginTop:10 }}>
		      <View style={{ 
		      	marginRight: 20,
		      	marginLeft:10, 
		      	width:160,
		      	height:210
		      }}>
		        <Image
		          source={{ uri:`https://uploads.mangadex.org/covers/${route.params.item.id}/${route.params.cover_art.attributes.fileName}.256.jpg`}}
		          style={{ 
		          	width: "100%", 
		          	height: "100%", 
		          	borderRadius:8
		          }}
		        />
		      </View>

		      <View style={{ flex: 1 }}>
		        <Text style={{ fontSize: 16,fontFamily: "Poppins-Medium",marginTop:8 }}>{route.params.item.attributes.title.en}</Text>
		        <Text style={{marginTop:2,color:"#999"}}>{route.params.item.relationships[0].attributes.name}</Text>

		        <View style={{ flexDirection: 'column', marginTop:5 }}> 
		          <Text style={{marginTop:2,color:"#333333"}}>Year: <Text>{route.params.item.attributes.year}</Text></Text>
		          <Text style={{marginTop:2,color:"#333333"}}>lastVolume: <Text>{route.params.item.attributes.lastVolume}</Text></Text>
		          <Text style={{marginTop:2,color:"#333333"}}>Status: <Text>{route.params.item.attributes.status}</Text></Text>
		          <Text style={{marginTop:2,color:"#333333"}}>Content: <Text>{route.params.item.attributes.contentRating}</Text></Text>
		          <Text style={{marginTop:2,color:"#333333"}}>Genre: <Text>{route.params.item.attributes.tags[0].attributes.name.en}</Text></Text>
		        </View>

		      </View>
		    </View>

		    <View style={{ 
		    	flexDirection: 'row',
		    	justifyContent:"space-between",
		    	padding:12,
		    	marginTop:5
		    }}> 
		        <Text style={{marginTop:2,color:"#333333",fontSize:14,fontFamily: "Poppins-Medium"}}>Summary</Text>
		        <TouchableOpacity onPress={()=>{setMoreDescription(!moreDescription)}}>
		        	<Text style={{marginTop:2,color:"#333333"}}>{moreDescription ? "less" : "more"}</Text>
		    	</TouchableOpacity>
		    </View>

		    <View>
		    	<DescriptionsList mangaData={route.params.item} showMore={moreDescription}/>
		    </View>

		    <SeparatorLine />
		    	<View style={{flexDirection:"row",marginBottom:2,alignItems:"center",justifyContent:"space-between",paddingLeft:8,paddingRight:12}}>
		    		<Text style={{ fontSize: 14, fontFamily:"Poppins-Medium"}}>Chapters </Text>
					<View style={{ marginVertical: 10 }} />
				      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
				        <Text style={{ fontSize: 16, marginRight: 5 }}>Sort</Text>
				        <FontAwesome name="sort" size={16} color="#000000" />
				      </TouchableOpacity>
		    	</View>
		    <SeparatorLine />

		  <View>
		  	<FlatList
        	data={chapters}
        	renderItem={renderItem}
        	keyExtractor={(item) => item.id}
      	/>
		  </View>
	</ScrollView>
	)
}
