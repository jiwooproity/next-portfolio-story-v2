import { load } from "./load";

const Notion = {
  getNotionList: `https://api.notion.com/v1/databases/${process.env.NEXT_NOTION_DATABASE_ID}/query`,
};

interface NotionResultsIF {
  object: string;
  id: string;
  created_time: string;
  last_edited_tiem: string;
  cover: any;
  icon: null;
  parent: any;
  archived: false;
  properties: any;
  url: any;
}

interface NotionApiResponseIF {
  object: string;
  results: NotionResultsIF[];
  next_cursor: null;
  has_more: false;
  type: string;
  page: {};
}

export const getNotionApi = async (): Promise<NotionApiResponseIF> => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_NOTION_SECRETE_TOKEN}`,
    "Notion-Version": "2022-06-28",
  };

  return await load({
    url: Notion.getNotionList,
    headers: headers,
    method: "POST",
    next: { revalidate: 60 },
  });
};
