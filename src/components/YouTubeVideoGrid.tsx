'use client';
import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

const YouTubeVideoGrid = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  // Video data structure
  const categories = [
    { id: 'all', label: 'All Videos' },
    { id: 'tutorials', label: 'Tutorials' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'interviews', label: 'Interviews' }
  ];

  const videos = [
    {
      id: 'dQw4w9WgXcQ',
      title: 'Advanced React Patterns Tutorial',
      category: 'tutorials',
      description: 'Learn advanced React patterns and best practices'
    },
    {
      id: 'jNQXAC9IVRw',
      title: 'Product Review: Latest Tech',
      category: 'reviews',
      description: 'Comprehensive review of the latest technology products'
    },
    {
      id: 'C0DPdy98e4c',
      title: 'Developer Interview Series',
      category: 'interviews',
      description: 'Interview with leading software engineers'
    },
    {
      id: 'L_LUpnjgPso',
      title: 'JavaScript Performance Tips',
      category: 'tutorials',
      description: 'Optimize your JavaScript code for better performance'
    },
    {
      id: '9bZkp7q19f0',
      title: 'Framework Comparison Review',
      category: 'reviews',
      description: 'Comparing popular frontend frameworks'
    },
    {
      id: 'kJQP7kiw5Fk',
      title: 'Tech Lead Q&A Session',
      category: 'interviews',
      description: 'Questions and answers with experienced tech leads'
    }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-white">
      
    {/* Breadcrumb */}
    <div className="bg-[#0F172A]/30 border-b border-white/5 pt-20">
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center space-x-2 text-sm text-gray-400">
          <Link href="/" className="hover:text-white">Iagentsflow.ai</Link>
          <span>/</span>
          <span className="text-[#F47F21]">Videos</span>
        </div>
      </div>
    </div>
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-white">
            Video{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F47F21] to-[#FF6B35]">
              Library
            </span>
          </h1>
          <p className="text-gray-300">Explore our collection of educational content</p>
        </header>

        {/* Category Tabs Navigation */}
        <nav aria-label="Video categories" className="mb-8">
          <ul className="flex flex-wrap gap-2 border-b border-white/10" role="tablist">
            {categories.map((category) => (
              <li key={category.id} role="presentation">
                <button
                  role="tab"
                  aria-selected={activeCategory === category.id}
                  aria-controls={`tabpanel-${category.id}`}
                  id={`tab-${category.id}`}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 font-medium transition-colors duration-200 border-b-2 focus:outline-none focus:ring-2 focus:ring-[#F47F21] focus:ring-offset-0 focus:ring-offset-[#0A0F1A] ${
                    activeCategory === category.id
                      ? 'border-[#F47F21] text-[#F47F21]'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-white/20'
                  }`}
                >
                  {category.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Video Grid */}
        <section
          role="tabpanel"
          id={`tabpanel-${activeCategory}`}
          aria-labelledby={`tab-${activeCategory}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="bg-[#0F172A]/50 backdrop-blur-md rounded-lg overflow-hidden border border-white/10 hover:border-[#F47F21]/50 transition-colors duration-200 flex flex-col"
            >
              {/* Video Embed Container */}
              <div className="relative aspect-video bg-[#0A0F1A]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  {video.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4 flex-1">
                  {video.description}
                </p>

                {/* Direct Link */}
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-[#F47F21] hover:text-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#F47F21] rounded px-2 py-1 -mx-2 transition-colors duration-200"
                  aria-label={`Watch ${video.title} on YouTube (opens in new tab)`}
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  <span>Watch on YouTube</span>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Empty State */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No videos found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeVideoGrid;