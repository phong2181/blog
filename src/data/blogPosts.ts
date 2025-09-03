import { BlogPost } from '../types';

export const categoryTranslations = {
  en: ['All', 'Technology', 'Travel', 'Health', 'Personal Finance', 'Education', 'Cuisine'],
  vi: ['Tất cả', 'Công nghệ', 'Du lịch', 'Sức khỏe', 'Tài chính cá nhân', 'Giáo dục', 'Ẩm thực']
};

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in 2025',
    excerpt: 'Exploring the latest breakthroughs in AI technology and their potential impact on various industries.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Technology',
    author: 'Sarah Chen',
    date: '2024-12-15',
    readTime: 8,
    imageUrl: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['AI', 'Machine Learning', 'Future Tech']
  },
  {
    id: '2',
    title: 'Hidden Gems of Southeast Asia: A Traveler\'s Guide',
    excerpt: 'Discover breathtaking destinations off the beaten path in Southeast Asia that most tourists never see.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Travel',
    author: 'Marcus Rodriguez',
    date: '2024-12-14',
    readTime: 12,
    imageUrl: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Southeast Asia', 'Travel Tips', 'Adventure']
  },
  {
    id: '3',
    title: 'Building Wealth in Your 30s: Smart Investment Strategies',
    excerpt: 'Practical advice for maximizing your financial growth during your most productive earning years.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Personal Finance',
    author: 'David Kim',
    date: '2024-12-13',
    readTime: 10,
    imageUrl: 'https://images.pexels.com/photos/6289065/pexels-photo-6289065.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Investing', 'Financial Planning', 'Wealth Building']
  },
  {
    id: '4',
    title: 'The Mediterranean Diet: Science-Backed Health Benefits',
    excerpt: 'Understanding how this ancient eating pattern can improve your health and longevity.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Health',
    author: 'Dr. Emily Watson',
    date: '2024-12-12',
    readTime: 7,
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Nutrition', 'Diet', 'Wellness']
  },
  {
    id: '5',
    title: 'Remote Learning: Best Practices for Online Education',
    excerpt: 'Essential tips and tools for students and educators to succeed in the digital classroom.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Education',
    author: 'Prof. Jennifer Adams',
    date: '2024-12-11',
    readTime: 9,
    imageUrl: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Online Learning', 'Education Technology', 'Study Tips']
  },
  {
    id: '6',
    title: 'Mastering French Cooking: Essential Techniques',
    excerpt: 'Learn the fundamental skills that will elevate your culinary creations to restaurant quality.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Cuisine',
    author: 'Chef Antoine Dubois',
    date: '2024-12-10',
    readTime: 15,
    imageUrl: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['French Cuisine', 'Cooking Techniques', 'Culinary Arts']
  },
  {
    id: '7',
    title: 'Blockchain Technology: Beyond Cryptocurrency',
    excerpt: 'Exploring innovative applications of blockchain in healthcare, supply chain, and more.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Technology',
    author: 'Alex Thompson',
    date: '2024-12-09',
    readTime: 11,
    imageUrl: 'https://images.pexels.com/photos/6777565/pexels-photo-6777565.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Blockchain', 'Innovation', 'Technology']
  },
  {
    id: '8',
    title: 'Sustainable Travel: Eco-Friendly Adventures',
    excerpt: 'How to explore the world while minimizing your environmental footprint.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    category: 'Travel',
    author: 'Luna Green',
    date: '2024-12-08',
    readTime: 8,
    imageUrl: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Sustainable Travel', 'Eco-Tourism', 'Environment']
  }
];

export const categories = ['All', 'Technology', 'Travel', 'Health', 'Personal Finance', 'Education', 'Cuisine'];