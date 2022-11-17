export interface Project {
  name: string;
  caption: string;
  src: any;
  alt: string;
  link: {
    github: string;
    demo: string;
  };
  details: {
    query: string;
    skills: string[];
    features: string[];
  };
}

export type Projects = {
  [key: string]: Project;
};
