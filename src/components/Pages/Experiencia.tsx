type ExperienciaProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Experiencia = ({ children }: ExperienciaProps) => {
  return (
    <Page>
      {children}
      Exp
    </Page>
  );
};
