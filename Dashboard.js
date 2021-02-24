const Dashboard = () => {
  return (
    <div className="dashboard-section section-pading">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h5 className="caption text-center">Registration</h5>
            <h2 className="heading text-center">Register your team</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="team_regi team_regi-left">
              <h3 className="team__name">nagasaka 96</h3>
              <h4 className="team_challange-name">challange taken</h4>
              <div className="challenge_name">
                <h2>No poverty</h2>
              </div>
              <div className="team-member">
                <div className="team-member__item">
                  <div className="team-member__img">
                    <img src="/img/teammember/member1.png" />
                    <div className="team-member__edit">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <p>edit member info</p>
                    </div>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Rayhan alam</h3>
                    </div>
                    <div className="team_member_desi">
                      <h3>Team leader</h3>
                    </div>
                  </div>
                </div>
                <div className="team-member__item">
                  <div className="team-member__img">
                    <img src="/img/teammember/member1.png" />
                    <div className="team-member__edit">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <p>edit member info</p>
                    </div>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Rayhan alam</h3>
                    </div>
                    <div className="team_member_desi">
                      <h3>Team leader</h3>
                    </div>
                  </div>
                </div>
                <div className="team-member__item">
                  <div className="team-member__img">
                    <img src="/img/teammember/member1.png" />
                    <div className="team-member__edit">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <p>edit member info</p>
                    </div>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Rayhan alam</h3>
                    </div>
                    <div className="team_member_desi">
                      <h3>Team leader</h3>
                    </div>
                  </div>
                </div>
                <div className="team-member__item">
                  <div className="team-member__img">
                    <img src="/img/teammember/member1.png" />
                    <div className="team-member__edit">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <p>edit member info</p>
                    </div>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Rayhan alam</h3>
                    </div>
                    <div className="team_member_desi">
                      <h3>Team leader</h3>
                    </div>
                  </div>
                </div>
                <div className="team-member__item">
                  <div className="team-member__img">
                    <img src="/img/teammember/member1.png" />
                    <div className="team-member__edit">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <p>edit member info</p>
                    </div>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Rayhan alam</h3>
                    </div>
                    <div className="team_member_desi">
                      <h3>Team leader</h3>
                    </div>
                  </div>
                </div>
                {/* <div className="team-member__item">
                  <div className="team-member__img">
                    <img src="/img/teammember/member1.png" />
                    <div className="team-member__edit">
                      <i
                        className="fa fa-pencil-square-o"
                        aria-hidden="true"
                      ></i>
                      <p>edit member info</p>
                    </div>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Rayhan alam</h3>
                    </div>
                    <div className="team_member_desi">
                      <h3>Team leader</h3>
                    </div>
                  </div>
                </div> */}
                <div className="team-member__item">
                  <div className="team-member__img team-member-added-btn">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </div>
                  <div className="team-member__txt">
                    <div className="team_member_name">
                      <h3>Team Member</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="team_regi team_regi-right">
              <h3 className="team_regi__title">add team member</h3>
              <div className="add-member-form">
                <form>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="upload-file">
                        <input type="file" className="form-control-file" />
                        <span>
                          Upload <br />
                          Image
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        name="temaName"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        name="temaName"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile No"
                        name="temaName"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="btn team_regi-right__btn"
                      >
                        Edit Member
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="submit"
                        className="btn team_regi-right__btn"
                      >
                        Add Member
                      </button>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-12 text-center">
                      <button type="submit" className="combtn complitebtn">
                        register now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
