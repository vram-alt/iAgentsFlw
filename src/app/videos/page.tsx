import React from 'react';
import { Metadata } from 'next';
import YouTubeVideoGrid from '@/components/YouTubeVideoGrid';
import { loadAllYouTubeVideos, loadAllYouTubeVideoCategories } from '@/sanity/loader/loadQuery';

export const metadata: Metadata = {
  title: 'AI Governance Videos & Demos | AgentsFlow AI',
  description: 'Watch AgentsFlow AI demos, webinars, and governance tutorials.',
  alternates: { canonical: 'https://iagentsflow.com/videos' }
}

const Videos = async () => {
    const { data: videos } = await loadAllYouTubeVideos();
    const { data: categories } = await loadAllYouTubeVideoCategories();

    return (
        <div>
            <YouTubeVideoGrid 
                videos={Array.isArray(videos) ? videos : []} 
                categories={Array.isArray(categories) ? categories : []}
            />
        </div>
    )
}

export default Videos;