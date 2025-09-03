import React from 'react';
import BlogCard from './BlogCard';
import { BlogPost, Translation } from '../types';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (post: BlogPost) => void;
  t: Translation;
}

const BlogList: React.FC<BlogListProps> = ({ posts, onPostClick, t }) => {
  if (posts.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 text-6xl mb-4">📝</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{t.noArticlesFound}</h3>
        <p className="text-gray-600">{t.noArticlesDescription}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} onClick={onPostClick} t={t} />
      ))}
    </div>
  );
};

export default BlogList;