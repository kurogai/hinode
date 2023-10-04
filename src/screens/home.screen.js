import { ScrollView, View, Text, TouchableOpacity,Image } from 'react-native';
import { Carousel } from 'react-native-basic-carousel';
import { AntDesign } from '@expo/vector-icons';

//hooks
import { useDataFetching } from '../hooks/useDataFetching';

//component
import { RenderMangaList } from "../components/renderMangaList.component"

//style
import styles from '../styles/home.style';

const Home = ({ navigation }) => {
  const { loading, data , showMore } = useDataFetching();

  return (
    <ScrollView
      style={styles.scrollView}
      vertical={true}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heading}>
        <Text style={styles.headingText}>
          Home
        </Text>
      </View>

      <View style={styles.carouselContainer}>
        {data.mistureResponseData && data.mistureResponseData.data.length > 0 ? (
          <Carousel
            data={data.mistureResponseData.data}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {

                }}
                key={item.id}
                style={styles.carouselItem}
              >
                <Image
                  style={styles.carouselImage}
                  source={{
                    uri: `https://uploads.mangadex.org/covers/${item.id}/${
                      item.relationships[2]?.attributes?.fileName ||
                      item.relationships[3]?.attributes?.fileName
                    }.256.jpg`,
                  }}
                />
              </TouchableOpacity>
            )}
            itemWidth={350}
          />
        ) : (
          <View style={styles.loadingContainer}></View>
        )}
      </View>

      <View style={styles.recentTrends}>
        <Text style={styles.recentTrendsText}>
          Recent Trends
        </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("More", { item: recentUpdatesData });
        }}>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <RenderMangaList mangaData={data.recentUpdatesData} navigation={navigation} />

      <View style={styles.topCollection}>
        <Text style={styles.topCollectionText}>
          Top Collection
        </Text>

        <TouchableOpacity onPress={() => {
          navigation.navigate("More", { item: topData });
        }}>
          <AntDesign name="right" size={20} color="black" />
        </TouchableOpacity>
      </View>

      <RenderMangaList mangaData={data.topData} navigation={navigation} />

      {showMore && (
        <ViewManga data={recentUpdatesData} />
      )}
    </ScrollView>
  );
};

export default Home;