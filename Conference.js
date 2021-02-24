const Conference = () => {
  return (
    <section className="conference-section section-pading">
      <div className="conference">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="conference__txt">
                <h5 className="caption">About Event</h5>
                <h2 className="heading">Biggest 2021 Digital conference.</h2>
                <p>
                  There are many variations of passages of available but the
                  majority have suffered alteration in some form, by injected
                  humour, or randomised words which don't look even slightly
                  believable. If you are going to use a passage of you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text. All the generators on the Internet.
                </p>
                <div className="event-loc">
                  <div className="event-loc__left">
                    <img src="/img/glogicon.png" />
                    <div className="event__time event_21">
                      <p>Where</p>
                      <span>Dhaka, bangladesh</span>
                    </div>
                  </div>
                  <div className="event-loc__right">
                    <img src="/img/icon1.png" />
                    <div className="event__time event_21">
                      <p>When</p>
                      <span>January 5 to 9, 2019</span>
                    </div>
                  </div>
                </div>
                <div className="event-loc__bttp">
                  <a className="combtn" href="">
                    Register
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="conference__media">
                <img className="img-responsive" src="/img/abouteventpic2.png" />
                <img src="/img/abouteventpic1.png" />
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conference;
