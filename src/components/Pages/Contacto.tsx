type ContactoProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Contacto = ({ children }: ContactoProps) => {
  return (
    <Page>
      {children}
      Contacto
    </Page>
  );
};
