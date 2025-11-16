type ProjectProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Projects = ({ children }: ProjectProps) => {
  return (
    <Page id="projects">
      {children}
      Projects
    </Page>
  );
};
