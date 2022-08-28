export interface goodsListInt {
  userId: string;
  id: number;
  title: string;
  introduce: string;
}
interface selectDataInt {
  title: string;
  introduce: string;
  page: number;
  count: number;
  pagesize: number;
}
export class goodsInitData {
  selectData: selectDataInt = {
    title: "",
    introduce: "",
    page: 1,
    count: 0,
    pagesize: 5,
  };
  list: goodsListInt[] = [];
}
