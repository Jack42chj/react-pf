import { supabase } from "../supabase/supabase";

export const getProjectData = async (name: string) => {
    if (!name) return null;
    const { data: list } = await supabase
        .from("portfolio")
        .select("*")
        .eq("project", name);
    if (!list) return null;
    return list[0];
};
