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
    return await fetch(url, { next, method, cache, headers }).then((res) =>
      res.json()
    );
  } catch (e) {
    console.log(e);
  }
}
