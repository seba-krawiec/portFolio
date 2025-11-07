type ProyectosProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Proyectos = ({ children }: ProyectosProps) => {
  return (
    <Page>
      {children}
      Proyectos
    </Page>
  );
};
