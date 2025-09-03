import { useNavigate } from "react-router-dom";
import SimpleSlider from "./SimpleSlider";
import BlogList from "./BlogList";
import { BlogPost } from "../types";
import VideoWrapper from "./Videos";
import TechReviewWrapper from "./TechReviews";

interface HomePagesProps {
  filteredPosts?: BlogPost[]; // Thêm ? để optional
  t: any;
}

function HomePages({
  filteredPosts = [], // Default value là empty array
  t,
}: HomePagesProps) {
  const navigate = useNavigate();
  
  // Dữ liệu slides cho slider
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: t.sliderTitle1 || "Discover Amazing Stories",
      description: t.sliderDesc1 || "Explore the world of fascinating articles and insights"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: t.sliderTitle2 || "Travel Adventures",
      description: t.sliderDesc2 || "Journey through breathtaking destinations around the globe"
    },
    {
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80",
      title: t.sliderTitle3 || "Healthy Lifestyle",
      description: t.sliderDesc3 || "Tips and tricks for a healthier and happier life"
    }
  ];

  // Sử dụng optional chaining và default values
  const latestTechPost = filteredPosts?.find((post: BlogPost) => 
    post.category === "Technology"
  );

  // Lấy 3 bài viết mới nhất, nếu filteredPosts undefined thì dùng empty array
  const recentPosts = filteredPosts?.slice(0, 3) || [];

  return (
    <>
      {/* Slider Hero Section */}
      <div className="lg:ml-[200px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <SimpleSlider slides={slides} />
      </div>

      {/* Video Wrapper Section */}
      <div className="lg:ml-[200px] mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            {t.featuredVideo || "Featured Video"}
          </h2>
          <VideoWrapper
            src="/videos/tech-demo.mp4"
            title={t.videoTitle || "Latest Technology Review"}
            description={t.videoDescription || "Watch our in-depth review of the newest tech products"}
            thumbnail="https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            className="rounded-xl shadow-lg"
            autoPlay={false}
            controls={true}
          />
        </div>

        {/* Tech Review Wrapper Section - chỉ hiện nếu có bài viết công nghệ */}
        {latestTechPost && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t.techReview || "Technology Review"}
            </h2>
            <TechReviewWrapper
              post={latestTechPost}
              t={t}
              onLike={(postId: string) => console.log('Liked post:', postId)}
              onShare={(postId: string) => console.log('Shared post:', postId)}
              onSave={(postId: string) => console.log('Saved post:', postId)}
              showActions={true}
              className="rounded-xl"
            />
          </div>
        )}

        {/* Recent Blog Posts - chỉ hiện nếu có bài viết */}
        {recentPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {t.recentPosts || "Recent Articles"}
            </h2>
            <BlogList
              posts={recentPosts}
              onPostClick={(post: BlogPost) => navigate(`/blog/${post.id}`)}
              t={t}
            />
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {t.ctaTitle || "Explore More Content"}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            {t.ctaDescription || "Discover more amazing articles, reviews, and stories in our complete collection."}
          </p>
          <button
            onClick={() => navigate("/posts")}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            {t.viewAllPosts || "View All Posts"}
          </button>
        </div>
      </div>
    </>
  );
}

export default HomePages;