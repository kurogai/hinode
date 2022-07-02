import { createSlice } from '@reduxjs/toolkit'

import { useState } from 'react';

const MangaList = createSlice({
    name : "DownloadChapter",
    initialState : [],
    reducers : {
        mangaList : (state,action)=>{
            const [data, setData] = useState();

            MediaLibrary.getAssetsAsync("Hinode/downloads",).then((result)=>{
                setData(result.assets);
            });
            state = data;
            //console.log("ff")
        },
        setMangaList : (state,action)=>{
            const x = action.payload;
            const manga = x.manga;
            state.map((element)=>{
                if(element.manga = manga){
                    element.downloaded = element.downloaded + 1
                }
            })
        }
    }
});

export const { mangaList, setMangaList } = MangaList.actions;
export default MangaList.reducer;