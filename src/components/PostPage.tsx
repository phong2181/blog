import CategoryFilter from "../components/CategoryFilter";
import HomePage from "./HomePage";

interface PostsPageProps {
  filteredPosts: any[];
  categories: string[];
  searchQuery: string;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  t: any;
}

const PostsPage = ({
  filteredPosts,
  categories,
  searchQuery,
  selectedCategory,
  setSelectedCategory,
  t
}: PostsPageProps) => {
  return (
    <div>
      {/* CategoryFilter chỉ hiện trên trang posts */}
      
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          t={t}
        />
      
      <main className="flex-1 transition-all duration-300 px-4 lg:ml-[0px]">
        <HomePage
          filteredPosts={filteredPosts}
          categories={categories}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          t={t}
        />
      </main>
    </div>
  );
};

export default PostsPage;