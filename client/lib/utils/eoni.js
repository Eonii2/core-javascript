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
    headers: { ...(defaultOptions.headers ?? {}), ...(options.headers ?? {}) }, // 깊은 복사
  };

  let response = await fetch(url, restOptions);

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

eoni.get = (url, options) => {
  eoni({
    url,
    ...options,
  });
};

eoni.put = (url, body, options) => {
  eoni({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

eoni.delete = (url, options) => {
  eoni({
    method: "DELETE",
    url,
    ...options,
  });
};

eoni.post = (url, body, options) => {
  eoni({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

eoni.post("어쩌고", { name: "eoni" }, { mode: "cors", headers: {} });
