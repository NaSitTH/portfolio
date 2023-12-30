export interface IMassageBox {
  id: string;
  createdAt: Date;
  name: string;
  email: string;
  massage: string | null;
}

export interface IMsgBoxesPagination {
  massageBoxes: IMassageBox[];
  currentPage: number;
  totalPages: number;
  totalRecords: number;
}

export interface IFilterReq {
  pageNumber: number;
  pageSize: number;
  // pageSize: string | string[] | undefined;
}
