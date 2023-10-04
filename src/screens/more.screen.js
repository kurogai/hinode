import { RenderMoreList } from "../components/renderMoreList.component";

export default function More({ navigation, route }){

	return(
		  <RenderMoreList mangaData={route.params.item} navigation={navigation}/>
  )
}