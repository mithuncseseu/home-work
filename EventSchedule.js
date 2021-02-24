import React, { useEffect } from "react";
const EventSchedule = () => {
  useEffect(() => {
    let eventTab = document.getElementsByClassName("eventTab");
    let eventlink = document.getElementsByClassName("eventlink");
    eventTab[0].style.display = "block";
    eventlink[0].className += " active-eventlink";
  });
  let openEventTap = (evt, tabName) => {
    var i, eventTab, eventlink;
    eventTab = document.getElementsByClassName("eventTab");
    for (i = 0; i < eventTab.length; i++) {
      eventTab[i].style.display = "none";
    }
    eventlink = document.getElementsByClassName("eventlink");
    for (i = 0; i < eventlink.length; i++) {
      eventlink[i].className = eventlink[i].className.replace(
        " active-eventlink",
        ""
      );
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-eventlink";
  };
  return (
    <div className="event-schedule-section" id="evenschelule">
      <div className="overlay1">
        <div className="event-schedule__top sub-section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h5 className="caption text-center">schedule</h5>
                <h2 className="heading text-center white-color">
                  event schedule
                </h2>
                <p className="heading-desc text-center">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown prin
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 custom-pad">
                <div
                  className="eventlink"
                  onClick={(e) => openEventTap(e, "event1")}
                >
                  <h6>1st DAY</h6>
                  <p>September 29, 2021</p>
                </div>
              </div>
              <div className="col-md-4 custom-pad">
                <div
                  className="eventlink"
                  onClick={(e) => openEventTap(e, "event2")}
                >
                  <h6>2nd DAY</h6>
                  <p>September 29, 2021</p>
                </div>
              </div>
              <div className="col-md-4 custom-pad">
                <div
                  className="eventlink"
                  onClick={(e) => openEventTap(e, "event3")}
                >
                  <h6>3rd DAY</h6>
                  <p>September 29, 2021</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event-schedule_bottom event-schedule-padding">
        <div id="event1" className="eventTab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="event2" className="eventTab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty2 mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty2 mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty2 mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="event3" className="eventTab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty3 mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty3 mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
                <div className="es-item">
                  <div className="es-item_l">
                    <div className="check_icon">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </div>
                    <h3 className="name">ifty3 mahmud</h3>
                    <h3 className="desi">Designation</h3>
                  </div>
                  <div className="es-item_r">
                    <h3>registration & breakfast</h3>
                    <div className="time_place">
                      <div className="gp">
                        <i className="fa fa-clock-o" aria-hidden="true"></i>
                        <span className="firstroom"> 08:30 - 09:30 AM</span>
                      </div>
                      <div className="gp">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <span>Room 206</span>
                      </div>
                    </div>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the indutry
                      standard dummy text ever since the 1500s.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
