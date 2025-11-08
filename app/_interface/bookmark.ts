export interface Bookmark {
  id: string;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

export interface Tag {
  id: string;
  name: string;
}
