import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 20,
  },
  heading: {
    paddingVertical: 10,
    paddingLeft: 10,
    marginTop: 25,
  },
  headingText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    color: "#000000",
  },
  carouselContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 25,
    marginBottom: 10,
  },
  carouselItem: {
    width: "93%",
    height: 210,
    borderRadius: 8,
    position: 'relative',
  },
  carouselImage: {
    width: "100%",
    height: "auto",
    aspectRatio: 1,
    borderRadius: 8,
  },
  loadingContainer: {
    width: 193,
    height: 220,
    borderRadius: 8,
    position: 'relative',
    backgroundColor: "#ffffff",
  },
  recentTrends: {
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  recentTrendsText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#000000",
  },
  topCollection: {
    paddingLeft: 15,
    paddingRight: 10,
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topCollectionText: {
    fontFamily: "Poppins-Medium",
    fontSize: 16,
    color: "#000000",
  },
  tabIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});