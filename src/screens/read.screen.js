import React, { useEffect, useState } from 'react';
import { View, Image, Dimensions, ActivityIndicator } from 'react-native';
import { Carousel } from 'react-native-basic-carousel';
import PinchZoomView from 'react-native-pinch-zoom-view';
import axios from 'axios';

export default function Read({ navigation, route }) {
  const chapterImageLink = "https://api.mangadex.org/at-home/server/";
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function chapter(id) {
    try {
      const dates = await axios.get(`${chapterImageLink}${id}`);
      setData(dates);
    } catch (error) {
      console.error('Erro ao buscar imagens do capítulo:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    chapter(route.params.id);
  }, [route.params.id]);

  const imagesArray = data
    ? data.data.chapter.dataSaver.map((img, index) => ({
        id: index, // Um ID único para cada imagem (pode usar o índice)
        url: `https://uploads.mangadex.org/data-saver/${data.data.chapter.hash}/${img}`,
      }))
    : [];

  console.log(imagesArray);

  return (
    <View style={{ flex: 1 }}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        data && (
          <Carousel
          	data={imagesArray}
            renderItem={({ item, index }) => (
                <PinchZoomView key={item.id}>
                 <Image
                    source={{
                      uri: item.url,
                    }}
                    style={{
                      flex: 1,
                      width: '100%',
                      resizeMode: 'contain',
                    }}
                  />
                </PinchZoomView>
            )}           
            itemWidth={350}
       		/>
        )
      )}
    </View>
  );
}