const defaultOptions = {
  method: "GET",
  mode: "cors",
  body: null,
  cache: "no-cache",
  credential: "same-origin",
  redirect: "follow",
  referrerPolicy: "no-referrer",
  headers: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};

export const eoni = async (options = {}) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: { ...defaultOptions.headers, ...options.headers },
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  // console.log(response);

  return response;
};

eoni.get = async (url, options) => {
  return eoni({
    url,
    ...options,
  });
};

eoni.post = (url, body, options) => {
  return eoni({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

eoni.put = (url, body, options) => {
  return eoni({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

eoni.delete = (url, options) => {
  return eoni({
    method: "DELETE",
    url,
    ...options,
  });
};
