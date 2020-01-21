function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function deleteCookie(name) {
  console.log("cookie deleted");
  setCookie(name, "", {
    "max-age": -1,
  });
}

export default { setCookie, deleteCookie };
