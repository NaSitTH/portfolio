import { IFilterReq, IMassageBox } from "@/interface/massageBox";
import api from "../service/apiService";

export const massageBoxRoute = "/inbox";

export const useMassageBox = () => {
  const fetch = async (filter: IFilterReq) => {
    const res = await api.get(massageBoxRoute, {
      params: {
        pageSize: filter.pageSize,
        pageNumber: filter.pageNumber,
      },
    });

    return res.data;
  };

  const create = async (data: IMassageBox) => {
    const res = await api.post(massageBoxRoute, data);
    return res.data;
  };

  return {
    fetch,
    create,
  };
};
