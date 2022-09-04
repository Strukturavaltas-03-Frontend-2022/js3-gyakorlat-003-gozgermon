
const cookieHandler = {
  getAll: function () {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = pair[1].trim();
    }
    return cookies;
  },

  toSessionStorage: function () {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = pair[1].trim();
    }
    for (const key in cookies) {
      sessionStorage.setItem(key, cookies[key]);
    };
  },

  flush: function () {
    var pairs = document.cookie.split(";");
    var cookies = {};
    for (var i = 0; i < pairs.length; i++) {
      var pair = pairs[i].split("=");
      cookies[(pair[0] + '').trim()] = pair[1].trim();
    }

    for (const key in cookies) {
      document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

  }






}

export  {cookieHandler}
