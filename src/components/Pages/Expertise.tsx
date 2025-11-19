import { HorizontalCard } from "../cards/Cards";
import { Content } from "../layout";
import { Page } from "../layout/Page";
import "../sass/_pagesCss/_pagesExpertice.scss";
import expertiseObj from "../../assets/expertise.json";

export const Expertise = () => {
  const { jobs } = expertiseObj;

  return (
    <Page id="exp" extraClass="exp">
      <Content extraClass="expertise-content">
        {jobs.map(({ title, description, timeLapse }) => {
          return (
            <HorizontalCard
              title={title}
              time={timeLapse}
              text={description}
              alt="asd"
              img="asd"
            />
          );
        })}
      </Content>
    </Page>
  );
};
