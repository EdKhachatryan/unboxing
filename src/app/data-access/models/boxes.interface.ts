export interface Box {
  node: {
    id: string;
    name: string;
    iconUrl: string;
    cost: string;
  }
}

export interface BoxesState {
  boxes: Box[];
  error: string;
  status: 'pending' | 'loading' | 'error' | 'success';
}
