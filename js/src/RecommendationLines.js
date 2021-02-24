/*! DDB-CMS recommender widget, copyright Veduz ApS */
import React from "react";
import ReactDOM from "react-dom";

class RecommendationLines extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    let { related, config } = this.props;
    if (!related || related.length === 0) {
      return null;
    }
    related = related.slice(0, 10);

    return (
      <div>
        <h2 style={{ marginTop: 72 }} className="sub-menu-title">
          {Drupal.t("Prøv også:")}
        </h2>
        {related.slice(0, 10).map(({ name, image, creator, hasPart, wid }) => (
          <a
            key={wid}
            style={{ marginBottom: 20, display: "block" }}
            href={
              "/ting/object/" +
              hasPart[0].pid +
              "?u_navigatedby=bibspire_userstatus"
            }
          >
            <img
              style={{
                verticalAlign: "top",
                display: "inline",
                opacity: 0.7,
                marginRight: 10
              }}
              src={image}
              width={80}
            />
            <span
              style={{
                verticalAlign: "top",
                display: "inline-block",
                width: 180
              }}
            >
              <h3
                className="item-title has-message"
                style={{ margin: 0, padding: 0 }}
              >
                {name}
              </h3>
              <div className="item-creators">{creator && creator[0]}</div>
            </span>
          </a>
        ))}
      </div>
    );
  }
}

export default RecommendationLines;
