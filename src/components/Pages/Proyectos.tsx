type ProyectosProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Proyectos = ({ children }: ProyectosProps) => {
  return (
    <Page id="proyectos">
      {children}
      Proyectos
    </Page>
  );
};
