import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Calendar, Clock, User, Tag, ArrowLeft } from "lucide-react";
import { BlogPost, Translation } from "../types";
import { mockBlogPosts } from "../data/blogPosts";
import CommentSection from "../components/CommentSection";

interface BlogDetailPageProps {
  t: Translation;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ t }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const post: BlogPost | undefined = mockBlogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">{t.notFound}</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          ← {t.back}
        </button>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    Technology: "bg-blue-100 text-blue-800",
    Travel: "bg-green-100 text-green-800",
    Health: "bg-pink-100 text-pink-800",
    "Personal Finance": "bg-amber-100 text-amber-800",
    Education: "bg-purple-100 text-purple-800",
    Cuisine: "bg-orange-100 text-orange-800",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8">
        {/* Button Back */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-black hover:text-blue-800 mb-4"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        {t.back || t.backs}
      </button>
      {/* Image */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              categoryColors[post.category] || "bg-gray-100 text-gray-800"
            }`}
          >
            {post.category}
          </span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {post.title}
      </h1>

      {/* Meta info */}
      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span className="font-medium">{post.author}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4" />
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>
            {post.readTime} {t.minRead}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="text-gray-700 leading-relaxed space-y-4">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium.
          </p>
        </div>
      </div>

      {/* Tags */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{t.tags}</h3>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            >
              <Tag className="w-3 h-3 mr-1" />
              {tag}
            </span>
          ))}
        </div>
      </div>
      <CommentSection t={t} />
    </div>
  );
};

export default BlogDetailPage;
