document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  // Demo: kiểm tra tài khoản cố định
  if (username === 'admin' && password === '123456') {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerText = 'Đăng nhập thành công!';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerText = 'Sai tài khoản hoặc mật khẩu!';
  }
});