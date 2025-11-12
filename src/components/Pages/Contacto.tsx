type ContactoProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Contacto = ({ children }: ContactoProps) => {
  return (
    <Page id="contacto">
      {children}
      Contacto
    </Page>
  );
};
