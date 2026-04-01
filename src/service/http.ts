type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
};

export async function request(url: string, options: RequestOptions = {}) {
  const { headers = {}, ...rest } = options;

  const res = await fetch(url, {
    ...rest,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const error = new Error(`HTTP ${res.status}`);
    // error.status = res.status;
    // error.body = data;
    throw error;
  }

  return data;
}
