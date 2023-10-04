import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 1,
  },
  imageContainer: {
    width: 150,
    height: 180,
    borderRadius: 12,
    padding: 4,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 8,
    objectFit: 'cover',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  tag: {
    fontSize: 12,
    marginLeft: 10,
    color: "#D2691E",
  },
  imageContainerMore:{
    width: 230,
    height: 180,
    borderRadius: 12,
    padding: 4,
  }
});