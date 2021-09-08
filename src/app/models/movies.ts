export interface IMovieBanner {
  maBanner: number;
  maPhim: number;
  hinhAnh: string;
}

export interface IMovie {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}
