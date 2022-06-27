import { configureStore } from '@reduxjs/toolkit'
import DownloadChapter from '../features/download'

export default configureStore({
  reducer: {
      download : DownloadChapter,
  },
})