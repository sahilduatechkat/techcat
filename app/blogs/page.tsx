

import React from 'react';
import Image from 'next/image'; // If using Next.js for image optimization

export default function BlogsPage() {
  const blogPosts = [
    {
      title: 'The Future of AI in Web Development',
      excerpt: 'Explore how artificial intelligence is revolutionizing web development, from automated testing to personalized user experiences.',
      date: 'Date: 2024-07-26',
      image: '/images/ai-future.png', // Path to your image (adjust as needed)
      slug: 'future-of-ai', // Unique identifier for the blog post
    },
    {
      title: 'Mastering React Hooks: A Practical Guide',
      excerpt: 'Learn how to use React Hooks effectively to manage state and side effects in your functional components.',
      date: 'Date: 2024-07-19',
      image: '/images/react_hook.jpg',
      slug: 'react-hooks-guide',
    }
  ];

  return (
    <div className="">
      <div className='bg-[#5A3AEC] w-full py-10 lg:py-20'>
        <h3 className='text-white text-[30px] lg:text-[60px] font-bold relative z-10 text-center'>
          Empower Innovation with Tech Katalyst: 
        </h3>
        <h3 className='text-white text-[30px] lg:text-[60px] font-bold relative z-10 text-center'>
          Insights for the Digital Era
        </h3>
        
        <p className='text-white text-center text-base mt-4 lg:mt-4 px-6 lg:px-[100px]'>
          Discover expert blogs on technology, design, and development. Stay informed with actionable tips, trends, and breakthroughs driving the digital transformation.
        </p>
      </div>

      <div className="container mx-auto py-12 px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                {post.image && (
                    <div className="relative h-48">
                        <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p> {/* Added line-clamp */}
                <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-xs">{post.date}</p>
                    <a href={`/blogs/${post.slug}`} className="text-[#5A3AEC] hover:underline text-sm font-medium">Read More</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};