interface FetchPropsType {
  url: string;
  headers: any;
  method: "GET" | "POST" | "PUT" | "DELETE";
  next?: { revalidate: number };
  cache?: "force-cache" | "no-store";
  body?: any;
}

export async function load({
  url,
  headers,
  method,
  next,
  cache,
  body,
}: FetchPropsType) {
  try {
    const response = await fetch(url, {
      headers,
      method,
      body: JSON.stringify(body),
      next,
      cache,
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
