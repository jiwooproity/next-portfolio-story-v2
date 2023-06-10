interface FetchPropsType {
  url: string;
  headers: any;
  method: "GET" | "POST" | "PUT" | "DELETE";
  next?: { revalidate: number };
  cache?: "force-cache" | "no-store";
}

export async function load({
  url,
  headers,
  method,
  next,
  cache,
}: FetchPropsType) {
  try {
    const response = await fetch(url, { headers, method, next, cache });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
}
