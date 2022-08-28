export interface userListInt {
  id: number;
  nickName: string;
  role: RoleInt[];
  userName: string;
}
interface RoleInt {
  role: number;
  roleName: string;
}
interface SelectDataInt {
  role: number;
  nickName: string;
}
interface RoleListInt {
  authority: number;
  roleId: never;
  roleName: string;
}
export class userInitData {
  selectData: SelectDataInt = {
    nickName: "",
    role: 0,
  };
  list: userListInt[] = []; //用户信息列表
  roleList: RoleListInt[] = []; //接受角色信息列表
}
