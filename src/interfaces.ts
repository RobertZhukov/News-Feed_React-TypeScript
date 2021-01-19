export interface INews {
  newsText: string;
  newsTitle: string;
  newsAuthor: string;
  id: number;
  editNews: boolean;
}

export interface IEditNews {
  e: string;
  id: number;
}

export interface INewsPage {
  newsData: {
    newsText: string;
    newsTitle: string;
    newsAuthor: string;
    id: number;
    editNews: boolean;
  }[];
}
