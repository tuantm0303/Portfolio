export interface Profile {
  name: string;
  age: number;
  position: string;
  about: string;
  cv: string;
}

export interface Project {
  name: string;
  img: string;
  createAt: string;
  categoryProjectId: string;
  short_desc: string;
  desc: string;
}

export interface CategoryProject {
  name: string;
}

export interface Posts {
  title: string;
  img: string;
  createAt: string;
  categoryPostId: string;
  short_desc: string;
  desc: string;
}

export interface categoryPost {
  name: string;
}
