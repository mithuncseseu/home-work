const Partners = () => {
  return (
    <div className="partner-section section-pading " id="partners">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="caption text-center">partners</h5>
            <h2 className="heading text-center white-color">
              Official partners.
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="partner-item">
              <div className="overlay-partner"></div>
              <img src="/img/partner/partner1.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="partner-item">
            <div className="overlay-partner"></div>
              <img src="/img/partner/partner2.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="partner-item">
            <div className="overlay-partner"></div>
              <img src="/img/partner/partner3.png" />
            </div>
          </div>
          <div className="col-md-3">
            <div className="partner-item">
            <div className="overlay-partner"></div>
              <img src="/img/partner/partner4.png" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="partner-footer">
              <p>
                Don’t hesitate, contact us for better help and services. View
                All Partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
