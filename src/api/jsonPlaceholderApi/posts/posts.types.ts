export interface ApiResponse<T> {
  data: T;
}

export interface PostItem {
  id: number;
  title: string;
  body: string;
  userId: number;
}
