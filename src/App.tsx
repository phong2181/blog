import { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Header from "./components/Header";
import HomePages from "./components/HomePages";
import AuthModal from "./components/AuthModal";
import BlogDetailPage from "./pages/BlogDetailPage";
import PostsPage from "./components/PostPage";
import { mockBlogPosts } from "./data/blogPosts";
import { categoryTranslations } from "./data/blogPosts";
import { translations } from "./data/translations";
import NotificationModal from "./components/NotificationModal";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import { AuthState, Language } from "./types";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; type: "login" | "register" }>({
    isOpen: false,
    type: "login",
  });
  const [openNoti, setOpenNoti] = useState(false);
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<Language>("en");

  const t = translations[currentLanguage];
  const categories = categoryTranslations[currentLanguage];

  const filteredPosts = useMemo(() => {
    return mockBlogPosts.filter((post) => {
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const categoryMap: Record<string, string> = {
        All: "All",
        Technology: "Technology",
        Travel: "Travel",
        Health: "Health",
        "Personal Finance": "Personal Finance",
        Education: "Education",
        Cuisine: "Cuisine",
      };

      const englishCategory =
        Object.keys(categoryMap).find(
          (key) => categories[Object.keys(categoryMap).indexOf(key)] === selectedCategory
        ) || selectedCategory;

      const matchesCategory =
        selectedCategory === categories[0] || post.category === englishCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header
          onSearch={setSearchQuery}
          onAuthClick={(type) => setAuthModal({ isOpen: true, type })}
          isAuthenticated={authState.isAuthenticated}
          user={authState.user}
          onLogout={() => setAuthState({ isAuthenticated: false, user: null })}
          searchQuery={searchQuery}
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          currentLanguage={currentLanguage}
          onLanguageChange={(lang) => {
            setCurrentLanguage(lang);
            setSelectedCategory(categoryTranslations[lang][0]);
          }}
          onclickNoti={() => setOpenNoti(true)}
          t={t}
        />

        
        {/* Side nav cho desktop */}
        <aside className="hidden lg:flex fixed top-[138px] left-0 h-[calc(100vh-4rem)] bg-transparent text-white flex-col justify-between z-40 p-2 w-[72px] lg:w-[200px]" >
          <nav className="space-y-2">
            <Sidebar t={t}/>
          </nav>
          <div className="p-2 mb-20 flex justify-center lg:justify-start"> 
              <button className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#E2E2E2] rounded-full hover:bg-gray-300 transition" onClick={() => setOpenNoti(true)}> 
                <i className="bi bi-bell-fill text-black"></i> 
              </button> 
            </div>
        </aside>
          {/* Bottom nav cho mobile */}
        <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 shadow-md lg:hidden z-50"> 
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-2 py-3 rounded-lg transition 
              ${isActive ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`
            }
          >
            <i className="bi bi-house text-xl"></i>
            <span className="text-xs">Home</span>
          </NavLink>
          
          <NavLink to="/posts" className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-2 py-3 rounded-lg transition 
              ${isActive ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`
            }> 
            <i className="bi bi-postcard-fill"></i> 
            <span className="text-xs">{t.posts}</span> 
          </NavLink> 

          <NavLink to="/shop" className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-2 py-3 rounded-lg transition 
              ${isActive ? "text-blue-600 font-bold" : "text-gray-500 hover:text-blue-600"}`
            }> 
            <i className="bi bi-people"></i> 
            <span className="text-xs">{t.roadmaps}</span> 
          </NavLink> 
        </nav>

        
          <NotificationModal isOpen={openNoti} onClose={() => setOpenNoti(false)} />
          <Routes>
            <Route
              path="/"
              element={
                <HomePages
                  filteredPosts={filteredPosts} // Đảm bảo filteredPosts được truyền vào
                  t={t}
                />
              }
            />
            <Route
              path="/posts"
              element={
                <PostsPage
                  filteredPosts={filteredPosts}
                  categories={categories}
                  searchQuery={searchQuery}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  t={t}
                />
              }
            >
            </Route>
            <Route path="/posts/:id" element={<BlogDetailPage t={t} />} />
            <Route path="*" element={<div className="p-8 text-center">404 - Page Not Found</div>} />
          </Routes>

          <AuthModal
            isOpen={authModal.isOpen}
            type={authModal.type}
            onClose={() => setAuthModal({ ...authModal, isOpen: false })}
            onAuth={(email, name) =>
              setAuthState({ isAuthenticated: true, user: { id: "1", email, name: name || email } })
            }
            t={t}
          />
        <footer className="bg-gray-900 text-white py-12 pb-24 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h3 className="text-2xl font-bold mb-4">{t.blogVerse}</h3>
            <p className="text-gray-400 mb-4">{t.footerDescription}</p>
            <div className="flex justify-center space-x-6 text-sm text-gray-400">
              <span>© 2024 {t.blogVerse}. {t.allRightsReserved}.</span>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
