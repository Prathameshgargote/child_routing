export interface Iproduct {
    pName: string;
    PId: string;
    pStatus: 'inprogress' | 'delivered' |'dispatch';
    canReturn: number;
  }