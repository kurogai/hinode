import { createSlice } from '@reduxjs/toolkit'

const DownloadChapter = createSlice({
    name : "DownloadChapter",
    initialState : [],
    reducers : {
        newDownload : (state, action)=>{
            const x = action.payload;
            state.push({
                manga : x.manga,
                link : x.link,
                chapter : Number(x.chapter),
                status : false,
                downloaded : 0,
                source : Number(x.source)
            });
        },
        updateDownloadCount : (state,action)=>{
            const x = action.payload;
            const target = x.index;

            state[target].downloaded = state[target].downloaded + 1;
        }
    }
});

export const { newDownload, updateDownloadCount } = DownloadChapter.actions;
export default DownloadChapter.reducer;