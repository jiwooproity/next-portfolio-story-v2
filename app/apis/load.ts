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
    let response = null;

    switch (method) {
      case "GET":
        response = await fetch(url, { headers, method, next, cache });
        break;
      case "POST":
        response = await fetch(url, { headers, method, body, next, cache });
      default:
        break;
    }

    return await response?.json();
  } catch (e) {
    console.log(e);
  }
}
