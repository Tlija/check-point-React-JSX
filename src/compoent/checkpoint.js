import "./checkpoint.css";
import { Checkpointliste } from "../data";
export function Checkpoint() {
  return (
    <div>
      <div>
        <div className="event-schedule-area-two bg-color pad100">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <div className="title-text">
                    <h2>Checkpoint Schedule</h2>
                  </div>
                  
                </div>
              </div>
              {/* /.col end*/}
            </div>
            {/* row end*/}
            <div className="row">
              <div className="col-lg-12">
                {/* <ul className="nav custom-tab" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      id="home-taThursday"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Day 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Day 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Day 3
                    </a>
                  </li>
                  <li className="nav-item d-none d-lg-block">
                    <a
                      className="nav-link"
                      id="sunday-tab"
                      data-toggle="tab"
                      href="#sunday"
                      role="tab"
                      aria-controls="sunday"
                      aria-selected="false"
                    >
                      Day 4
                    </a>
                  </li>
                  <li className="nav-item mr-0 d-none d-lg-block">
                    <a
                      className="nav-link"
                      id="monday-tab"
                      data-toggle="tab"
                      href="#monday"
                      role="tab"
                      aria-controls="monday"
                      aria-selected="false"
                    >
                      Day 5
                    </a>
                  </li>
                </ul> */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade active show"
                    id="home"
                    role="tabpanel"
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th className="text-center" scope="col">
                              Date
                            </th>
                            <th scope="col">Member</th>
                            <th scope="col">Checkpoint Name</th>
                            <th scope="col">discription</th>
                            <th className="text-center" scope="col">
                              Status
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {Checkpointliste.map(
                            ({date,img,discription,status,checkpoint:{ CHName,Mname}})=><tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span> {date[0]}</span>
                                <p>{date[1]}</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src={img}
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">{CHName}</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">{Mname}</a>
                                  </div>
                                  {/* <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div> */}
                                  {/* <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div> */}
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>{discription}</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                {status}
                              </div>
                            </td>
                          </tr>
                          )}
                          {/* <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>20</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Toni Duggan</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room D3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box border-bottom-0">
                            <th scope="row">
                              <div className="event-date">
                                <span>18</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Billal Hossain</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room A3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Speakers</th>
                            <th scope="col">Session</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Venue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Toni Duggan</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Harman Kardon</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box border-bottom-0">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Billal Hossain</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Speakers</th>
                            <th scope="col">Session</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Venue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Harman Kardon</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Billal Hossain</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box border-bottom-0">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Toni Duggan</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="sunday"
                    role="tabpanel"
                    aria-labelledby="sunday-tab"
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Speakers</th>
                            <th scope="col">Session</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Venue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Toni Duggan</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Harman Kardon</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box border-bottom-0">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Billal Hossain</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="monday"
                    role="tabpanel"
                    aria-labelledby="monday-tab"
                  >
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Speakers</th>
                            <th scope="col">Session</th>
                            <th scope="col">Venue</th>
                            <th scope="col">Venue</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>16</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Harman Kardon</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box">
                            <th scope="row">
                              <div className="event-date">
                                <span>18</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Toni Duggan</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                          <tr className="inner-box border-bottom-0">
                            <th scope="row">
                              <div className="event-date">
                                <span>20</span>
                                <p>Novembar</p>
                              </div>
                            </th>
                            <td>
                              <div className="event-img">
                                <img
                                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                  alt
                                />
                              </div>
                            </td>
                            <td>
                              <div className="event-wrap">
                                <h3>
                                  <a href="#">Billal Hossain</a>
                                </h3>
                                <div className="meta">
                                  <div className="organizers">
                                    <a href="#">Aslan Lingker</a>
                                  </div>
                                  <div className="categories">
                                    <a href="#">Inspire</a>
                                  </div>
                                  <div className="time">
                                    <span>05:35 AM - 08:00 AM 2h 25'</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="r-no">
                                <span>Room B3</span>
                              </div>
                            </td>
                            <td>
                              <div className="primary-btn">
                                <a className="btn btn-primary" href="#">
                                  Read More
                                </a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div> */}
                </div>
                <div className="primary-btn text-center">
                  <a href="#" className="btn btn-primary">
                    Download Schedule
                  </a>
                </div>
              </div>
              {/* /col end*/}
            </div>
            {/* /row end*/}
          </div>
        </div>
      </div>
    </div>
  );
}
