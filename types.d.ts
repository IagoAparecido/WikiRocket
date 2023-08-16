type Result = {
  pageid: string;
  title: string;
  extract: string;
  thumbnail?: {
    source: string;
    width: number;
    heigth: number;
  };
};

type SearchResult = {
  query?: {
    pages?: Result[];
  };
};
