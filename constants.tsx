
import React from 'react';
import { 
  Video, 
  Smartphone, 
  Lightbulb, 
  Beaker, 
  BarChart3, 
  Presentation, 
  Trophy,
  Quote
} from 'lucide-react';
import { Company, Service, GalleryItem, Award } from './types';

export const PROFILE_IMAGE = "https://sirchem.my.canva.site/_assets/media/30d2a11c8d148777078b78dc55e5bc6e.jpg";

export const COMPANIES: Company[] = [
  {
    name: "Roots Edu",
    image: "https://sirchem.my.canva.site/_assets/media/2fe84d143cd48a23deab3dbbcaf2bf50.jpg",
    description: "Leading online education platform in Bangladesh, providing quality resources for HSC/SSC students."
  },
  {
    name: "Shikho Technologies Ltd",
    image: "https://sirchem.my.canva.site/_assets/media/2afc23007d9e0973040779fb15aa63b7.jpg",
    description: "Revolutionizing the education system with hyper-visual and interactive learning content."
  }
];

export const AWARDS: Award[] = [
  {
    title: "Award from Police Commissioner of RMP",
    image: "https://sirchem.my.canva.site/_assets/media/d714424edf7cf9c4e57138728cf9c883.jpg"
  }
];

export const SERVICES: Service[] = [
  { title: "Video Editing", icon: <Video className="w-6 h-6" /> },
  { title: "Reels Series Creation", icon: <Smartphone className="w-6 h-6" /> },
  { title: "Motivational Content", icon: <Lightbulb className="w-6 h-6" /> },
  { title: "Scientific Video Series", icon: <Beaker className="w-6 h-6" /> },
  { title: "Scientific Online Pulse Analysis", icon: <BarChart3 className="w-6 h-6" /> },
  { title: "Online Live Classes", icon: <Presentation className="w-6 h-6" /> },
  { title: "Olympiad Preparation", icon: <Trophy className="w-6 h-6" /> }
];

export const GALLERY: GalleryItem[] = [
  {
    title: "Scientific Video Series",
    image: "https://sirchem.my.canva.site/_assets/media/8a67dd148e378447afc404698af1efbf.jpg"
  },
  {
    title: "Online Live Classes",
    image: "https://sirchem.my.canva.site/_assets/media/2a685efc5838fd1219c8fc30042af02d.jpg"
  },
  {
    title: "Olympiad Sessions",
    image: "https://sirchem.my.canva.site/_assets/media/24958dd49bf27f0853f1a822b06b8787.jpg"
  },
  {
    title: "Teaching & Work Moments",
    image: "https://sirchem.my.canva.site/_assets/media/816b7bede00439561c2bcb179415414c.jpg"
  }
];

export const TESTIMONIALS = [
  {
    name: "Ayman Sadiq",
    role: "Founder, 10 Minute School",
    content: "Sabbir's ability to explain complex chemical engineering concepts in a way that high school students can grasp is truly remarkable.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayman"
  },
  {
    name: "Student Alpha",
    role: "HSC Candidate",
    content: "His scientific video series helped me clear my basics in organic chemistry faster than any textbook ever could. Truly inspiring!",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Student1"
  }
];
