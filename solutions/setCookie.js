function setCookie(value) {
    const exp = Date.now() + (15 * 60 * 1000);
    const expires = new Date(exp)
    document.cookie = `token=${value};expires=${expires.toUTCString()};path=/`;
  }


export default setCookie;
