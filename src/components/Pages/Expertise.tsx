import { Card } from "../cards/Card";
import { Page } from "../layout/Page";
import "../sass/_pagesCss/_pagesExpertise.scss";
import expertiseObj from "../../assets/expertise.json";

export const Expertise = () => {
  const { jobs } = expertiseObj;

  return (
    <Page id="exp" extraClass="exp" contentClass="expertise-content">
      {jobs.map(({ title, description, timeLapse }) => {
        return (
          <Card extraClass="horizontal" key={title}>
            <div className="card_titleWrapper">
              <Card.title title={title} titleClass="card_title" />
              <Card.subtitle
                subtitle={timeLapse}
                subtitleClass="card_titleTime"
              />
            </div>
            <Card.text textClass="card_text" content={description} />
          </Card>
        );
      })}
    </Page>
  );
};
