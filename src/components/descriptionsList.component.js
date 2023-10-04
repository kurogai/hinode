import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export const DescriptionsList = ({ mangaData, showMore }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: 'row', justifyContent: 'center',paddingRight:10}}>
          {mangaData.attributes.availableTranslatedLanguages.map((language) => (
            <TouchableOpacity
              style={{
              width:55,
              height:20,
              marginTop:10,
              borderRadius:8,
              backgroundColor:selectedLanguage === language ? '#8B4513' : '#333333' ,
              justifyContent:"center",
              alignItems:"center",
              marginLeft:10
              }}
              key={language}
              onPress={() => handleLanguageChange(language)}
            >
              <Text style={{color: selectedLanguage === language ? '#ffffff' : '#999' }}>
                {language}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
       </ScrollView>

       <View style={{
      padding:12,
      }}>
        <Text style={{color:"#999"}}>  
          {
      mangaData ? (
        showMore
          ? mangaData.attributes.description[selectedLanguage]
          : (
            mangaData.attributes.description[selectedLanguage]
            ? mangaData.attributes.description[selectedLanguage].slice(0, 100) + '...'
            : 'Not Available'
          )
      ) : 'Not Available'
    }

        </Text>
      </View>
    </View>
  );
};

export default DescriptionsList;
