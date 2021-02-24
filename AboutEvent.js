const AboutEvent = () => {
  return (
    <div className="about-event-section section-pading" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-event-play">
              <div className="vedio-box">
                <video
                  // width="585"
                  // height="331"
                  poster="vedio/aboutevent.png"
                  controls
                >
                  <source src="vedio/vedio1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                {/* <div className="vedio-thumbnail">
                  <img src="vedio/aboutevent.png" />
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-event-content">
              <h5 className="caption">About Event</h5>
              <h2 className="heading">
                Glimps from the last innovation hackathon
              </h2>
              <p>
                The previous event Lorem Ipsum is simply dummy text of the and
                typesetting industry. Lorem Ipsum has been the industry's dummy
                text ever since the 1500s, when an unknown printer took .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEvent;
