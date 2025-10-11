// Project types
export interface Project {
  name: string;
  description: string;
  link: {
    href: string;
    title: string;
  };
  tags: string[];
}

// Talk types
export interface Talk {
  title: string;
  url?: string;
  event?: {
    name: string;
    url: string;
  };
  date: string;
  videoLinks: Array<{
    title: string;
    url: string;
  }>;
  tags: string[];
}

// Old Project types
export interface OldProject {
  name: string;
  description: string;
  tags: string[];
  links: {
    repo?: {
      href: string;
      title: string;
    };
    demo?: {
      href: string;
      title: string;
    };
    post?: {
      href: string;
      title: string;
    };
  };
}
