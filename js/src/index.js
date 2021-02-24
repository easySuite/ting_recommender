/*! DDB-CMS recommender widget, copyright Veduz ApS */
import "core-js/stable";
import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";
import RecommendationRows from "./RecommendationRows";
import RecommendationCols from "./RecommendationCols";
import RecommendationLines from "./RecommendationLines";
import axios from "axios";
const _ = {
  uniq: require("lodash/uniq")
};
//const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const urlObjectMatch = location.href.match(/\/ting\/object\/([^?#.]*)/);
const urlCollectionMatch = location.href.match(/\/ting\/collection\/([^?#.]*)/);
let started = false;
let relatedPromise;
if (urlObjectMatch) {
  relatedPromise = axios.get(
    `https://api.bibspire.dk/v1/recommend?pid=${urlObjectMatch[1]}&site=${
      location.host
    }&token=l5ICyj27g8QeQcus`
  );
}

if (urlCollectionMatch) {
  relatedPromise = axios.get(
    `https://api.bibspire.dk/v1/recommend?pid=${urlCollectionMatch[1]}&site=${
      location.host
    }&token=l5ICyj27g8QeQcus`
  );
}

const urlStatusLoanMatch = location.href.match(/\/user\/me\/status/);

const RelatedRows = ({ related, src }) => (
  <div>
    <h2 style={{ marginTop: 72 }} className="sub-menu-title">
      {Drupal.t("Prøv også:")}
    </h2>
    {related.slice(0, 10).map(({ name, image, creator, hasPart, wid }) => (
      <a
        key={wid}
        style={{ marginBottom: 20, display: "block" }}
        href={
          "/ting/object/" + hasPart[0].pid + "?u_navigatedby=bibspire_" + src
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

async function attach() {
  if (started) {
    return;
  }
  if (urlObjectMatch) {
    started = true;

    const pid = urlObjectMatch[1];
    let related = (await relatedPromise).data;
    const config = (related.config && related.config.tingObject) || {};

    const parent =
      document.querySelector("#ting-recommender") ||
      document.querySelector(".ting-object");
    related = related && related.related;
    if (related && parent) {
      const elem = document.createElement("div");
      parent.appendChild(elem);
      ReactDOM.render(
        <RecommendationCols related={related} config={config} />,
        elem
      );
    }
  }

  if (urlCollectionMatch) {
    started = true;

    const pid = urlCollectionMatch[1];
    let related = (await relatedPromise).data;
    const config = (related.config && related.config.tingObject) || {};

    related = related && related.related;
    if (related && related.length) {
      if (window.innerWidth <= 950) {
        const parent = document.querySelector(".primary-content");
        const elem = document.createElement("div");
        parent.appendChild(elem);
        ReactDOM.render(
          <div style={{ clear: "both", paddingTop: 120 }}>
            <RecommendationCols related={related} config={config} />
          </div>,
          elem
        );
      } else {
        const parent = document.querySelector("#ting-recommender");
        const elem = document.createElement("div");
        parent.appendChild(elem);
        ReactDOM.render(
          <div style={{ marginTop: 150 }}>
            <RelatedRows related={related} src="collection" />
          </div>,
          elem
        );
      }
    }
  }

  if (urlStatusLoanMatch) {
    started = true;
    let loans;
    //for (let i = 0; i < 20; ++i) {
    loans = _.uniq(
      Array.from(document.querySelectorAll(".primary-content a"))
        .map(o => o.href)
        .filter(s => s.match(/ting\/object\//))
        .map(o =>
          o.replace(/.*\/ting\/object\/([^?#]*).*/, (_, _1) =>
            decodeURIComponent(_1)
          )
        )
    );
    /*
      if (loans.length) {
        break;
      }
      await sleep(200);
    }
    */
    relatedPromise = axios.get(
      `https://api.bibspire.dk/v1/recommend?${loans
        .map(s => "pid=" + s)
        .join("&")}&site=${location.host}&token=l5ICyj27g8QeQcus`
    );
    window.p = relatedPromise;
    let related = (await relatedPromise).data;
    const config = (related.config && related.config.tingObject) || {};
    related = related && related.related;
    if (related && related.length) {
      if (window.innerWidth <= 950) {
        const parent = document.querySelector(".primary-content");
        const elem = document.createElement("div");
        parent.appendChild(elem);
        ReactDOM.render(
          <div style={{ clear: "both", paddingTop: 120 }}>
            <RecommendationCols related={related} config={config} />
          </div>,
          elem
        );
      } else {
        const parent = document.querySelector(".secondary-content");
        const elem = document.createElement("div");
        parent.appendChild(elem);
        ReactDOM.render(
          <RelatedRows related={related} src="userstatus" />,
          elem
        );
      }
    }
  }

  if (
    location.href === "http://localhost:8080/" ||
    location.hash === "#bibspire-layout-demo"
  ) {
    started = true;
    const pid = "870970-basis:54970021";
    relatedPromise = axios.get(
      `https://api.bibspire.dk/v1/recommend?pid=${pid}&site=${location.host}&token=devtoken`
    );
    const related = (await relatedPromise).data;
    const elem = document.createElement("div");
    document.body.appendChild(elem);
    ReactDOM.render(
      <RecommendationCols
        related={related.related}
        config={related.config.tingObject}
      />,
      elem
    );
  }
}

if (
  document.readyState === "complete" ||
  document.readyState === "interactive"
) {
  attach();
} else {
  document.addEventListener("DOMContentLoaded", attach);
}
