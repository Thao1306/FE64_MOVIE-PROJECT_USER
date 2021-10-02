export interface IUser {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
}

export type LoginUser = {
  taiKhoan: string;
  matKhau: string;
};

export interface IShowTicket {
  giaVe: string;
  hinhAnh: string;
  maVe: string;
  ngayDat: string;
  tenPhim: string;
  thoiLuongPhim: string;
  maCumRap: string;
  maGhe: string;
  maHeThongRap: string;
  maRap: string;
  tenCumRap: string;
  tenGhe: string;
  tenHeThongRap: string;
  tenRap: string;

}
