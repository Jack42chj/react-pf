import { supabase } from "./supabase";
import type { GetBlogsModel } from "../types/blog";

export const getBlogsAPI = async (): Promise<GetBlogsModel["data"] | null> => {
  const { data } = await supabase.from("blog").select("*");

  return data;
};
