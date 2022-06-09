export interface Profile {
  id: number;
  name: string;
  age: number;
  position: string;
  about: string;
  cv: string;
}

export interface Project {
  id: number;
  name: string;
  img: string;
  createAt: string;
  categoryProjectId: string;
  short_desc: string;
  desc: string;
}

export interface CategoryProject {
  id: number;
  name: string;
}

export interface Post {
  id: number;
  title: string;
  img: string;
  createAt: string;
  categoryPostId: string;
  short_desc: string;
  desc: string;
}

export interface categoryPost {
  id: number;
  name: string;
}
