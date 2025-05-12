import { useQuery } from "@tanstack/react-query";

import { getProjectDetailAPI, getProjectsAPI } from "../apis/project";

const projectKeys = {
  all: ["project"] as const,
  lists: () => [...projectKeys.all, "list"] as const,
  details: () => [...projectKeys.all, "detail"] as const,
  detail: (projectId: string) => [...projectKeys.details(), projectId] as const,
};

export const useGetProjects = () =>
  useQuery({
    queryKey: projectKeys.lists(),
    queryFn: () => getProjectsAPI(),
  });

export const useGetProjectDetail = (projectId: string) =>
  useQuery({
    queryKey: projectKeys.detail(projectId),
    queryFn: () => getProjectDetailAPI(projectId),
  });
