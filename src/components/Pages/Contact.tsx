type ContactProps = {
  children?: ChildNode | string | undefined;
};

import { Page } from "../layout/Page";

export const Contact = ({ children }: ContactProps) => {
  return (
    <Page id="contact">
      {children}
      Contact
    </Page>
  );
};
