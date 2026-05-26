import { ACCOUNT, errorMsg, form, password, username } from './variable.js';

// Kiểm tra nếu đã đăng nhập thì vào thẳng trang chính
if (localStorage.getItem('spl_logged_in') === 'true') {
  window.location.href = 'index.html';
}

// Lắng nghe submit form
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Lấy GIÁ TRỊ người dùng nhập — phải dùng .value
  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  errorMsg.style.display = 'none';

  if (usernameValue === ACCOUNT.username && passwordValue === ACCOUNT.password) {
    localStorage.setItem('spl_logged_in', 'true');
    window.location.href = 'index.html';
  } else {
    errorMsg.textContent = 'Sai tên đăng nhập hoặc mật khẩu!';
    errorMsg.style.display = 'block';
    password.value = '';
    password.focus();
  }
});