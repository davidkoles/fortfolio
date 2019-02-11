import React from "react";

export default class Skills extends React.Component {
  render() {
    const { skill1 } = this.props;
    const { skill2 } = this.props;
    const { skill3 } = this.props;

    return (
      <div>
        <h3 className="w3-padding-16">My Skills</h3>
        <p className="w3-wide">{skill1}</p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-center w3-padding-small w3-dark-grey"
            style={{ width: "99%" }}
          >
            99%
          </div>
        </div>
        <p className="w3-wide">{skill2}</p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-center w3-padding-small w3-dark-grey"
            style={{ width: "95%" }}
          >
            95%
          </div>
        </div>
        <p className="w3-wide">{skill3}</p>
        <div className="w3-light-grey">
          <div
            className="w3-container w3-center w3-padding-small w3-dark-grey"
            style={{ width: "90%" }}
          >
            90%
          </div>
        </div>
        <br />

        <div className="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">14+</span>
            <br />
            Partners
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">55+</span>
            <br />
            Projects Done
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">89+</span>
            <br />
            Happy Clients
          </div>
          <div className="w3-quarter w3-section">
            <span className="w3-xlarge">150+</span>
            <br />
            Meetings
          </div>
        </div>

        <button className="w3-button w3-light-grey w3-padding-large w3-section">
          <i className="fa fa-download" /> Download Resume
        </button>
      </div>
    );
  }
}
