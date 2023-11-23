function playGame() {
  const wallet = document.getElementById("wallet").value;
  const betAmount = document.getElementById("betAmount").value;
  const choice = document.getElementById("choice").value;

  // Kiểm tra nếu ví tiền hoặc số tiền cược không hợp lệ
  if (wallet <= 0 || betAmount <= 0 || betAmount > wallet) {
    alert("Vui lòng nhập số tiền hợp lệ.");
    return;
  }

  const randomValue = Math.floor(Math.random() * 6) + 1; // Random số từ 1 đến 6

  let result = "";
  if (randomValue <= 3 && choice === "tai") {
    result = "Chúc mừng! Bạn đã thắng.";
    wallet = parseInt(wallet) + parseInt(betAmount);
  } else if (randomValue > 3 && choice === "xiu") {
    result = "Chúc mừng! Bạn đã thắng.";
    wallet = parseInt(wallet) + parseInt(betAmount);
  } else {
    result = "Rất tiếc! Bạn đã thua.";
    wallet = parseInt(wallet) - parseInt(betAmount);
  }

  document.getElementById(
    "result"
  ).innerText = `${result} Số ngẫu nhiên là: ${randomValue}. Số tiền hiện tại: ${wallet}`;
}
