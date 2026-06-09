import React from 'react';
import { Metadata } from 'next';
import YouTubeVideoGrid from '@/components/YouTubeVideoGrid';
import VideoLibraryStructuredData from '@/components/VideoLibraryStructuredData';
import { loadAllYouTubeVideos, loadAllYouTubeVideoCategories } from '@/sanity/loader/loadQuery';

export const metadata: Metadata = {
  title: 'AI Governance Videos & Demos | AgentsFlow AI',
  description: 'Watch AgentsFlow AI demos, webinars, and governance tutorials.',
  alternates: { canonical: 'https://iagentsflow.com/videos' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const Videos = async () => {
    const { data: videos } = await loadAllYouTubeVideos();
    const { data: categories } = await loadAllYouTubeVideoCategories();
    const videoList = Array.isArray(videos) ? videos : []
    const categoryList = Array.isArray(categories) ? categories : []

    return (
      <>
        <VideoLibraryStructuredData videos={videoList} />
        <div>
            <YouTubeVideoGrid 
                videos={videoList} 
                categories={categoryList}
            />
        </div>
      </>
    )
}

export default Videos;