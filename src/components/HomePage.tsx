import { useNavigate } from "react-router-dom";
import { BlogPost } from "../types";
import BlogList from "./BlogList";

function HomePage({
  filteredPosts,
  categories,
  searchQuery,
  selectedCategory,
  t,
}: any) {
  const navigate = useNavigate();
  return (
    <main className="lg:ml-[200px] max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {t.discoverStories}
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.heroDescription}</p>
      </div>

      {/* Counter */}
      <div className="mb-6">
        <p className="text-gray-600">
          {selectedCategory === categories[0] ? (
            // Khi chọn All
            `${t.showingAll} ${filteredPosts.length} ${t.articles}`
          ) : (
            // Khi chọn 1 category cụ thể
            `${t.found} ${filteredPosts.length} ${
              filteredPosts.length !== 1 ? t.articles : t.article
            } ${t.in} ${selectedCategory}`
          )}
          {searchQuery && ` ${t.for} "${searchQuery}"`}
        </p>
      </div>


      {/* Blog List */}
      <BlogList
        posts={filteredPosts}
        onPostClick={(post: BlogPost) => navigate(`/posts/${post.id}`)}
        t={t}
      />
    </main>
  );
}

export default HomePage;