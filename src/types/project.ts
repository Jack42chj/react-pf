export interface GetProjectsModel {
  data: {
    projectId: string;
    title: string;
  }[];
}

export interface GetProjectDetailModel {
  projectId: string;
  title: string;
  introduction: string;
  description: string;
  explanation: string;
  role: string;
  skills: string;
  github: string;
  velog: string;
  url: string;
  image: string;
  color: string;
  startDate: string;
  endDate: string;
}
