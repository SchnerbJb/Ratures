
export interface Books {
  books: {
    id: number,
    title: string,
    author: string,
    synopsis: string,
    rating: number,
  }[]
}

export interface Book {
  id: number,
  title: string,
  author: string,
  synopsis: string,
  rating: number,
}

