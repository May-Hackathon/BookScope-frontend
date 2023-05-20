import type {Book} from "@/@types/book";
import type {User} from "@/@types/user";

export type Report = {
  id: number;
  book: Book;
  user: User;
  title: string;
  content: string;
  tags: string[];
}