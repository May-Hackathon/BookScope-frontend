export type BookMetadata = {
  volumeInfo:{
    title: string;
    subtitle: string;
    description : string;
    imageLinks?: {
      thumbnail: string;
    }
  }
}