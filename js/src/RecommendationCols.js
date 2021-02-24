/*! DDB-CMS recommender widget, copyright Veduz ApS */
import React from "react";
import ReactDOM from "react-dom";

class RecommendationCols extends React.Component {
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
    if (!related || related.length === 0) {
      return null;
    }
    const totalWidth = this.state.totalWidth || 100;
    const rows = 3;
    let horizontalSpacing = 24;
    let width = +config.coverWidth || 158;
    const minCols = 4;
    const minWidth = minCols * (width + horizontalSpacing);

    if (minWidth > totalWidth) {
      horizontalSpacing *= totalWidth / minWidth;
      width *= totalWidth / minWidth;
    }
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
                  <div
                    style={{
                      lineHeight: 16 + "px",
                      maxHeight: 32,
                      overflow: "hidden",
                      marginBottom: 4
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      lineHeight: 16 + "px",
                      maxHeight: 32,
                      overflow: "hidden"
                    }}
                  >
                    <strong>
                      {(creator[0] || "").replace(/\(.*\)/, "")} (
                      {datePublished})
                    </strong>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default RecommendationCols;
