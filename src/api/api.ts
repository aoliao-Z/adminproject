import { service } from "@/utils/api/service/service";
//登录接口
export const login = (username: string, password: string) => {
  return service({
    url: "/login",
    method: "POST",
    data: { username, password },
  });
};
//商品列表接口
export const getGoodsList = () => {
  return service({
    url: "/getGoodsList",
    method: "Get",
  });
};
//用户列表接口
export const getUserList = () => {
  return service({
    url: "/getUserList",
    method: "Get",
  });
};
//角色列表接口
export const getRoleList = () => {
  return service({
    url: "/getRoleList",
    method: "Get",
  });
};
