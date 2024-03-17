export type CreateTalesRequestProps = {
  title: string;
  description: string;
};

export interface talesResponseProps {
  _id: string;
  title: string;
  description: string;
  author_id: string;
  author_name: string;
  workflow_id: string;
  __v: number;
}

export interface talesProps {
  totalPages: number | string;
  tales: talesResponseProps;
}
