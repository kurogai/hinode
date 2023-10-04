import React, { useState, useEffect } from 'react';
import { View, Image, Text, ActivityIndicator } from 'react-native';

//style
import cardStyles from "../styles/card.style"

function CardMore({ title, image, tag }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (image.uri) {
      Image.prefetch(image.uri).then(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [image.uri]);

  return (
    <View style={cardStyles.container}>
      <View style={cardStyles.imageContainerMore}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Image
            source={image}
            style={cardStyles.image}
            resizeMethod={"scale"}
            resizeMode={"cover"}
          />
        )}
      </View>
      <View>
        <Text style={cardStyles.title}>
          {title && title.slice(0, 10)}...
        </Text>
         <Text style={cardStyles.tag}>
          {tag && tag}
        </Text>
      </View>
    </View>
  );
}

export default CardMore;