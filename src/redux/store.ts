import { create } from "zustand";


interface DataType {
  id: string,
  title: string,
  channelurl: string,
  urlImage: string,
  isOnline: string,
  type: string
}


type StoreState = {
  datasList: DataType[];
  selectedData : DataType | null ;
  setData: (data :DataType)=> void
};

export const useStore = create<StoreState>((set) => ({
  datas: [],
  datasList: [], // Added this line to include the missing datasList property
  selectedData: null,
  setData: (data: DataType) =>
    set(() => ({ selectedData: data }))
}));