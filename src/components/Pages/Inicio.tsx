type InicioProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Inicio = ({ children }: InicioProps) => {
  return (
    <Page>
      {children}
      Inicio
    </Page>
  );
};
