export interface Bookmark {
  id: string;
  title: string;
  url: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  tags: Tag[];
}

export interface CreateBookmarkDTO {
  title: string;
  url: string;
  description?: string;
  tags?: string[];
}

export interface Tag {
  id: string;
  name: string;
}
