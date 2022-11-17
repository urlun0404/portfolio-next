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
    skills: Readonly<Array<string>>;
    features: Readonly<Array<string>>;
  };
}

export type Projects = {
  [key: string]: Project;
};
