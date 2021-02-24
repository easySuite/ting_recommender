/*! DDB-CMS recommender widget, copyright Veduz ApS */
import React from "react";
import ReactDOM from "react-dom";
import Mustache from "mustache";

class RecommenderWidget extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {};
  }

  componentDidMount() {
    if (this.ref.current) {
      this.setState({ totalWidth: this.ref.current.offsetWidth });
    }
  }

  render() {
    setTimeout(() => {
      if (this.ref.current) {
        this.setState({ totalWidth: this.ref.current.offsetWidth });
      }
    }, 0);
    let { related, config } = this.props;
    if (config.widgetType === "custom") {
      try {
        return (
          <div
            dangerouslySetInnerHTML={{
              __html: Mustache.render(config.customHtml, {
                related: related
                  .slice(0, config.customLimit || 6)
                  .map(({ hasPart, image, name, creator, datePublished }) => ({
                    title: name,
                    image,
                    link: `/ting/object/${hasPart[0].pid}?u_navigatedBy=bibspire`,
                    creator: creator,
                    year: hasPart[0].datePublished
                  }))
              })
            }}
          />
        );
      } catch (e) {
        return "Fejl i konfiguration af egen tilpasning af anbefalinger:" + e;
      }
    }
    if (!related || related.length === 0) {
      return null;
    }
    const totalWidth = this.state.totalWidth || 100;
    const rows = config.rows || 1;
    const horizontalSpacing = 24;
    const width = +config.coverWidth || 158;
    const coverRatio = 1.398734;
    const coverHeight = width * coverRatio;
    const fontSize = 14;
    const lineHeight = 20;
    const coverTextSpacing = 8;
    const verticalSpacing = 24;
    const cols = Math.max((totalWidth / (width + horizontalSpacing)) | 0, 1);
    related = related.slice(0, rows * cols);

    return (
      <div
        ref={this.ref}
        style={{
          fontFamily: "FaktPro-Light, sans-serif"
        }}
      >
        {related.length === 0 ? (
          undefined
        ) : (
          <h2
            style={{
              fontWeight: "400",
              fontFamily: "FaktPro-Light, sans-serif",
              fontSize: 40
            }}
          >
            {Drupal.t("Inspiration")}
          </h2>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            flexWrap: "wrap"
          }}
        >
          {related.map(o => {
            const { hasPart, image, name, creator } = o;
            const { datePublished, url } = hasPart[0];
            const { pid } = hasPart[0];

            return (
              <a
                href={`/ting/object/${pid}?u_navigatedby=bibspire`}
                key={pid}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                  color: "black",
                  padding: `0 ${horizontalSpacing}px ${verticalSpacing}px 0`
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: width,
                    height: coverHeight,
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover",
                    margin: `0 0 ${coverTextSpacing}px 0`
                  }}
                />
                <div
                  style={{
                    display: "inline-block",
                    fontSize: fontSize + "px",
                    lineHeight: lineHeight + "px",
                    width: width
                  }}
                >
                  {name}
                  <br />
                  <strong>
                    {(creator[0] || "").replace(/\(.*\)/, "")} ({datePublished})
                  </strong>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecommenderWidget;
