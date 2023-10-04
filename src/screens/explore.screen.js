import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

//hook
import { useDataFetching } from '../hooks/useDataFetching';

//component
import { RenderMangaList } from "../components/renderMangaList.component";
import { Genre } from "../components/genre.component";

//style
import exploreStyles from '../styles/explorer.style'

export const Explore = ({ navigation }) => {
 
  const { data , loading, showMore } = useDataFetching();


  return (
     <ScrollView
      vertical={true}
      style={exploreStyles.scrollView}
      showsVerticalScrollIndicator={false}
    >

      <View style={exploreStyles.popularGenres}>
        <Text style={exploreStyles.popularGenresText}>
          Popular Genres
        </Text>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.tagsData && data.tagsData.data.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => {
            console.log(item);
          }}>
            <Genre name={item.attributes.name.en} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={exploreStyles.recommend}>
        <Text style={exploreStyles.recommendText}>
          Recommend
        </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("More", { item: data.topRatedData });
        }}>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <RenderMangaList mangaData={data.topRatedData} navigation={navigation} />

      <View style={exploreStyles.lastUpdate}>
        <Text style={exploreStyles.lastUpdateText}>
          Last Update
        </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("More", { item: data.episodeData });
        }}>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <RenderMangaList mangaData={data.episodeData} navigation={navigation} />
    </ScrollView>
  );
};
