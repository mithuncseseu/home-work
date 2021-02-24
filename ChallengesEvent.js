import React, { useEffect } from "react";
const ChallengesEvent = () => {
  useEffect(() => {
    let eventChallengeTab = document.getElementsByClassName(
      "eventChallengeTab"
    );
    // let challenges_itemLink = document.getElementsByClassName(
    //   "challenges-item"
    // );
    eventChallengeTab[0].style.display = "block";
    // challenges_itemLink[0].className += " active-challenges_item";
  });
  let openEventChallengeTap = (evt, tabName) => {
    var i, eventChallengeTab, eventlink;
    eventChallengeTab = document.getElementsByClassName("eventChallengeTab");
    console.log(eventChallengeTab);
    for (i = 0; i < eventChallengeTab.length; i++) {
      eventChallengeTab[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
  };
  return (
    <div className="challenges-section section-pading" id="challanges">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="caption text-center">challanges</h5>
            <h2 className="heading text-center">event challanges</h2>
          </div>
        </div>
        <div className="row challenges_bg">
          <div className="col-md-4">
            <div
              onClick={(e) => openEventChallengeTap(e, "eventChallenge1")}
              className="challenges-item challenges-item--1st"
            >
              <h3 className="challenges-item__title">Challange: 01</h3>
              <h3 className="challenges-item__txt">
                No <br /> Poverty
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div
              onClick={(e) => openEventChallengeTap(e, "eventChallenge2")}
              className="challenges-item challenges-item--2nd"
            >
              <h3 className="challenges-item__title white-color">
                Challange: 02
              </h3>
              <h3 className="challenges-item__txt">
                Zero <br /> Hunger
              </h3>
            </div>
          </div>
          <div className="col-md-4">
            <div
              onClick={(e) => openEventChallengeTap(e, "eventChallenge3")}
              className="challenges-item challenges-item--3rd"
            >
              <h3 className="challenges-item__title white-color">
                Challange: 03
              </h3>
              <h3 className="challenges-item__txt">
                Good Health
                <br /> & Well Being
              </h3>
            </div>
          </div>
          <div id="eventChallenge1" className="col-md-12 eventChallengeTab">
            <div className="challenges__article-wrapper">
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="eventChallenge2" className="col-md-12 eventChallengeTab">
            <div className="challenges__article-wrapper">
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a1
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div id="eventChallenge3" className="col-md-12 eventChallengeTab">
            <div className="challenges__article-wrapper">
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a3
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
              <div className="challenges__article_item">
                <img src="img/article/articlepic1.png" />
                <div className="article_right">
                  <h4 className="challenges__article_item__sub-heading">
                    Challenge 1a
                  </h4>
                  <h3 className="challenges__article_item__heading">
                    Jobs for All
                  </h3>
                  <p className="challenges__article_item__p">
                    A job-sourcing app for those who need it the most. The
                    pandemic has caused many layoffs in the informal sector.
                    There are garment workers, mechanics, construction workers
                    that don’t have access to bdjobs.com. How can we give them
                    access to employment opportunities?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChallengesEvent;
