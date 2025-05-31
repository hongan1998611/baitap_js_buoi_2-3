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
