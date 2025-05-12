import { supabase } from "./supabase";
import type { GetProjectDetailModel, GetProjectsModel } from "../types/project";

export const getProjectsAPI = async (): Promise<
  GetProjectsModel["data"] | null
> => {
  const { data } = await supabase.from("portfolio").select("projectId, title");

  return data;
};

export const getProjectDetailAPI = async (
  projectId: string,
): Promise<GetProjectDetailModel | null> => {
  const { data } = await supabase
    .from("portfolio")
    .select("*")
    .eq("projectId", projectId);

  return data ? data[0] : null;
};
