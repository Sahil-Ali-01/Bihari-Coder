
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  tags: string[];
  demoLink: string;
  githubLink: string;
}

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
    case 'Intermediate':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400';
    case 'Advanced':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400';
  }
};

const ProjectCard = ({ title, description, image, difficulty, tags, demoLink, githubLink }: ProjectCardProps) => {
  const difficultyClass = getDifficultyColor(difficulty);
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-100 dark:border-gray-700">
      <div className="md:flex">
        <div className="md:w-1/3">
          <img 
            src={image} 
            alt={title} 
            className="h-48 md:h-full w-full object-cover"
          />
        </div>
        
        <div className="md:w-2/3 p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{title}</h3>
            <Badge className={difficultyClass}>
              {difficulty}
            </Badge>
          </div>
          
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="border-coder-blue text-coder-blue">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex gap-3 mt-auto">
            <Button size="sm" className="bg-coder-orange hover:bg-coder-orange/90">
              <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
              </a>
            </Button>
            <Button size="sm" variant="outline" className="border-coder-purple text-coder-purple hover:bg-coder-purple/10">
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="mr-1 h-4 w-4" /> View Code
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
