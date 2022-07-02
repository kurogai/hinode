import { configureStore } from '@reduxjs/toolkit'
import DownloadChapter from '../features/download'
import MangaList from '../features/mangaList';

export default configureStore({
  reducer: {
      download : DownloadChapter,
      mangaList : MangaList
  },
})