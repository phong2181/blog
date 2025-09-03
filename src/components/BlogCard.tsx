import React from 'react';
import { Calendar, Clock, User, Tag } from 'lucide-react';
import { BlogPost, Translation } from '../types';

interface BlogCardProps {
  post: BlogPost;
  onClick: (post: BlogPost) => void;
  t: Translation;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, onClick, t }) => {
  const categoryColors: Record<string, string> = {
    'Technology': 'bg-blue-100 text-blue-800',
    'Travel': 'bg-green-100 text-green-800',
    'Health': 'bg-pink-100 text-pink-800',
    'Personal Finance': 'bg-amber-100 text-amber-800',
    'Education': 'bg-purple-100 text-purple-800',
    'Cuisine': 'bg-orange-100 text-orange-800'
  };

  return (
    <article 
      onClick={() => onClick(post)}
      className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[post.category] || 'bg-gray-100 text-gray-800'}`}>
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} {t.minRead}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs bg-gray-50 text-gray-600"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default BlogCard;