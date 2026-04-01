type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: { [key: string]: unknown };
};

export async function request(url: string, options: RequestOptions = {}) {
  const { headers = {}, body, ...rest } = options;

  const res = await fetch(url, {
    ...rest,
    body: body ? JSON.stringify(body) : undefined,
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
