export interface Profile {
  id: number;
  fullname: string;
  age: number;
  avatar: string;
  position: string;
  about: string;
  cv: string;
}

export interface Project {
  id: number;
  name: string;
  img: string;
  createdAt: Date;
  updatedAt: Date;
  categoryProjectId: number;
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
  createdAt: Date;
  updatedAt: Date;
  categoryPostId: number;
  short_desc: string;
  desc: string;
}

export interface CategoryPost {
  id: number;
  name: string;
}
