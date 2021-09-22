export interface ICinema {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
}

export interface ICinemaBranch {
  danhSachPhim: [];
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  hinhAnh: string;
}

export interface IListFilm {
  lstLichChieuTheoPhim: IShowTimeFilm[];
  maPhim: number;
  tenPhim: string;
  hinhAnh: string;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}
export interface IShowTimeFilm {
  maLichChieu: number;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
  ngayChieu?: string;
  gioChieu?: string;
}

export interface IBookingTicket {
  maLichChieu: number;
  danhSachPhim: [
    {
      "maGhe": number,
      "giaVe": number
    }
  ];
}
