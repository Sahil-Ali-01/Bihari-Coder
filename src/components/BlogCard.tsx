import { CalendarIcon, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, readTime, category, image, slug }: BlogCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-md transition-all">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-coder-blue text-white">{category}</Badge>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
          <CalendarIcon className="h-4 w-4 mr-1" />
          <span>{date}</span>
          <span className="mx-2">•</span>
          <Clock className="h-4 w-4 mr-1" />
          <span>{readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          <a href={slug} target="_blank" rel="noopener noreferrer" className="hover:text-coder-purple transition-colors">
            {title}
          </a>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">{excerpt}</p>

        <a 
          href={slug} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-coder-purple font-medium hover:underline"
        >
          Read Article
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
