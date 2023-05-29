    // Lấy đối tượng form
    var form = document.querySelector('form');

    // Xử lý sự kiện submit form
    form.addEventListener('submit', function(event) {
      // Lấy giá trị tài khoản và mật khẩu
      var username = document.querySelector('input[name="username"]').value;
      var password = document.querySelector('input[name="password"]').value;

      // Kiểm tra tính hợp lệ của tài khoản
      var usernameRegex = /^[a-zA-Z0-9]+$/;
      if (!usernameRegex.test(username)) {
        alert("Tài khoản chỉ được chứa chữ cái và số");
        event.preventDefault();
        return false;
      }

      // Kiểm tra tính hợp lệ của mật khẩu
      var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
      if (!passwordRegex.test(password)) {
        alert("Mật khẩu phải có ít nhất 6 kí tự, bao gồm chữ cái, số và ít nhất 1 kí tự đặc biệt");
        event.preventDefault();
        return false;
      }
    });