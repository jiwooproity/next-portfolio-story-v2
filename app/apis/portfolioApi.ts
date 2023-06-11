import { load } from "./load";

const Notion = {
  getNotionList: `https://api.notion.com/v1/databases/${process.env.NEXT_NOTION_DATABASE_ID}/query`,
};

interface NotionDescriptionIF {
  type: string;
  text: {
    content: string;
    link: string;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: string;
  };
  plain_text: string;
  href: string;
}

interface NotionTitleIF {
  type: string;
  text: {
    content: string;
    link: string;
  };
  annotations: any;
  plain_text: string;
  href: string;
}

export interface NotionMultiSelectIF {
  id: string;
  name: string;
  color: string;
}

export interface NotionPropertiesIF {
  Description: { id: string; type: string; rich_text: NotionDescriptionIF[] };
  GitHub: {
    id: string;
    type: string;
    url: string;
  };
  Date: {
    id: string;
    type: string;
    date: { start: string; end: string; time_zone: string };
  };
  Feature: {
    id: string;
    type: string;
    multi_select: NotionMultiSelectIF[];
  };
  Tag: {
    id: string;
    type: string;
    multi_select: NotionMultiSelectIF[];
  };
  Domain: { id: string; type: string; url: string };
  Title: { id: string; type: string; title: NotionTitleIF[] };
}

export interface NotionResultsIF {
  object: string;
  id: string;
  created_time: string;
  last_edited_tiem: string;
  cover: {
    file: {
      url: string;
    };
  };
  icon: null;
  parent: any;
  archived: false;
  properties: NotionPropertiesIF;
  url: any;
}

export interface NotionApiResponseIF {
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
