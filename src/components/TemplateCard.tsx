
import { useState } from 'react';
import { Eye, Github, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface TemplateCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const TemplateCard = ({ title, description, image, tags, demoLink, githubLink }: TemplateCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'} flex items-end p-4`}>
          <div className="flex gap-2">
            <Button size="sm" className="bg-coder-blue hover:bg-coder-blue/90">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Eye className="mr-1 h-4 w-4" /> Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/20">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-1 h-4 w-4" /> Code
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-coder-lightPurple dark:bg-coder-purple/20 text-coder-purple">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
