import React, { useState, useEffect, useCallback } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CardMore from '../components/cardMore.component';


export const RenderMoreList = ({mangaData, navigation}) => {

  return (
    <ScrollView vertical={true} showsHorizontalScrollIndicator={false}>
      <View style={{
        flex: 1,
        marginTop: 65,
        marginBottom: 25,
        flexDirection: "column",
        paddingRight: 15,
        paddingLeft: 10,
      }}>
        {mangaData &&
          mangaData.data.map((manga) =>
            manga.relationships
              .filter((data) => data.type === "cover_art")
              .map((image) => (
                <TouchableOpacity key={manga.id} onPress={() => {
                  navigation.navigate("Manga", { item: manga, cover_art: image })
                }}>
                  <CardMore
                    title={manga.attributes.title.en}
                    image={{
                      uri: `https://uploads.mangadex.org/covers/${manga.id}/${image?.attributes?.fileName}.256.jpg`,
                    }}
                    tag={manga.attributes.tags[0].attributes.name.en}
                  />
                </TouchableOpacity>
              ))
          )}
      </View>
    </ScrollView>
  );
};