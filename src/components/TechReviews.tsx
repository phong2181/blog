import React from 'react';
import { Star, ThumbsUp, MessageSquare, Share2, Bookmark } from 'lucide-react';
import { BlogPost } from '../types';

interface TechReviewWrapperProps {
  post: BlogPost;
  t: any;
  onLike?: (postId: string) => void;
  onShare?: (postId: string) => void;
  onSave?: (postId: string) => void;
  showActions?: boolean;
  className?: string;
}

const TechReviewWrapper: React.FC<TechReviewWrapperProps> = ({
  post,
  t,
  onLike,
  onShare,
  onSave,
  showActions = true,
  className = ''
}) => {
  const [isLiked, setIsLiked] = React.useState(false);
  const [isSaved, setIsSaved] = React.useState(false);
  const [rating] = React.useState(4.5); // Mock rating

  const handleLike = () => {
    setIsLiked(!isLiked);
    onLike?.(post.id);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSave?.(post.id);
  };

  const handleShare = () => {
    onShare?.(post.id);
    // Implement share functionality
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : index < rating
            ? 'text-yellow-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      {/* Header with Rating */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            {post.category}
          </span>
          <div className="flex items-center space-x-1">
            {renderStars(rating)}
            <span className="text-sm text-gray-600 ml-2">
              {rating.toFixed(1)}
            </span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="prose prose-gray max-w-none mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t.techSpecs || 'Technical Specifications'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Pros</h4>
              <ul className="text-green-600 space-y-1">
                <li>• High performance</li>
                <li>• Excellent build quality</li>
                <li>• Great value for money</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Cons</h4>
              <ul className="text-red-600 space-y-1">
                <li>• Battery life could be better</li>
                <li>• Limited color options</li>
              </ul>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t.verdict || 'Verdict'}
          </h3>
          <p className="text-gray-700">
            This product offers excellent performance and build quality at a competitive price point. 
            While battery life could be improved, it remains a solid choice for most users.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      {showActions && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleLike}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-colors ${
                  isLiked
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <ThumbsUp className="w-4 h-4" />
                <span className="text-sm">Like</span>
              </button>

              <button className="flex items-center space-x-1 px-3 py-2 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors">
                <MessageSquare className="w-4 h-4" />
                <span className="text-sm">Comment</span>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={handleShare}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>

              <button
                onClick={handleSave}
                className={`p-2 rounded-lg transition-colors ${
                  isSaved
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TechReviewWrapper;