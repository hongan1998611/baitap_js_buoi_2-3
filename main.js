// Bắt sự kiện click cho các nút tab
const buttons = document.querySelectorAll(".btn-tab");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.add("active");
    const layout = button.getAttribute("name");
    callLayout(layout);
  });
});
//----------------------------------------//----------------------------------------------//

// hàm gọi layout các bài tập html add vào thẻ iframe
function callLayout(layout) {
  const iframe = document.querySelector("iframe");
  iframe.src = `./${layout}.html`;
}

//----------------------------------------//----------------------------------------------//

// hàm hiển thị kết quả
function showResult(id, result) {
  document.getElementById(id).innerText = result;
}
//---------------------------------------//----------------------------------------------//

// hàm tính lương nhân viên
/*
input: 
  lương 1 ngày =1000.000 VNĐ
  nhập số ngày làm việc (vd: 20 ngày)

process:
  1. lấy lương 1 ngày từ input
  2. lấy số ngày làm việc từ input
  3. tính lương nhân viên = lương 1 ngày * số ngày làm việc
  4. hiển thị kết quả

output: 
  hiển thị lương nhân viên
  (ví dụ: Lương nhân viên: 20.000.000 VNĐ)
*/
function callTinhLuong() {
  event.preventDefault();
  let idResult = "resultTinhLuong";
  let luong1Ngay = document.getElementById("luong1Ngay").value * 1;
  if (luong1Ngay <= 0) {
    showResult(idResult, "Lương 1 ngày phải lớn hơn 0");
    return;
  }

  let soNgayLamViec = document.getElementById("soNgayLamViec").value * 1;
  if (soNgayLamViec <= 0) {
    showResult(idResult, "Số ngày làm việc phải lớn hơn 0");
    return;
  }

  let luongNhanVien = luong1Ngay * soNgayLamViec;

  showResult(
    idResult,
    `Lương nhân viên: ${luongNhanVien.toLocaleString()} VNĐ`
  );
}
//---------------------------------------//----------------------------------------------//

// hàm tính giá trị trung bình
/*
input: 
  nhập vào 5 số thực (vd: 1.2, 3.4, 5.6, 7.8, 9.0)

process:
  1. lấy giá trị của 5 số từ input
  2. tính tổng các số
  3. tính giá trị trung bình = tổng các số / 5
  4. hiển thị kết quả

output:
  hiển thị giá trị trung bình
  (ví dụ: Giá trị trung bình: 5.0)
*/
function callTinhTrungBinh() {
  event.preventDefault();
  let idResult = "resultTinhTrungBinh";
  // nếu người dùng không nhập thì so = 0
  let so1 = document.getElementById("soThuNhat").value * 1;
  let so2 = document.getElementById("soThuHai").value * 1;
  let so3 = document.getElementById("soThuBa").value * 1;
  let so4 = document.getElementById("soThuTu").value * 1;
  let so5 = document.getElementById("soThuNam").value * 1;

  tongSo = so1 + so2 + so3 + so4 + so5;
  let giaTriTrungBinh = tongSo / 5;

  showResult(idResult, `Giá trị trung bình: ${giaTriTrungBinh.toFixed(2)}`);
}
//---------------------------------------//----------------------------------------------//
