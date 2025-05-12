import { useQuery } from "@tanstack/react-query";

import { getBlogsAPI } from "../apis/blog";

export const useGetBlogs = () =>
  useQuery({
    queryKey: ["client"],
    queryFn: () => getBlogsAPI(),
  });
