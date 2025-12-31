import React from 'react';
import YouTubeVideoGrid from '@/components/YouTubeVideoGrid';
import { loadAllYouTubeVideos, loadAllYouTubeVideoCategories } from '@/sanity/loader/loadQuery';

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