import React, { Component } from 'react';
import { connect } from 'react-redux';

class Hours extends Component {
  constructor(props) {
    super(props);
    this.clickRight = this.clickRight.bind(this);
    this.clickLeft = this.clickLeft.bind(this);
    this.mapHoursSections = this.mapHoursSections.bind(this);
    this.mapHoursDots = this.mapHoursDots.bind(this);
  }
  getDefault() {
    return { dayIndex: new Date().getDay() };
  }
  clickRight() {
    const newIndex = (this.state.dayIndex > 5) ? 0 : this.state.dayIndex + 1;
    this.setState({ dayIndex: newIndex });
  }
  clickLeft() {
    const newIndex = (this.state.dayIndex < 1) ? 6 : this.state.dayIndex - 1;
    this.setState({ dayIndex: newIndex });
  }
  mapHoursSections(hours) {
    return hours.map(data => {
      return (
        <div className="hours-section" key={data.menu}>
          <h2>{data.menu}</h2>
          <span>{data.start} - {data.end}</span>
        </div>
      );
    });
  }
  mapHoursDots(hours) {
    return hours.map((day, index) => {
      if (index === this.state.dayIndex) {
        return (<span key={index} className="hours-dot-active">&bull;</span>);
      }
      else {
        return (<span key={index} className="hours-dot-inactive">&bull;</span>);
      }
    });
  }
  componentDidMount() {
    this.setState(this.getDefault());
  }
  render() {
    if (!this.props.loading) {
      const allHours = this.props.hours;
      const currentHours = allHours[this.state.dayIndex].hours;
      const currentDay = allHours[this.state.dayIndex].day;
      const hoursSections = this.mapHoursSections(currentHours);
      const hoursDots = this.mapHoursDots(allHours);

      return (
        <div className="hours">
          <h2 className="hours-label">Hours</h2>
          <br />
          {hoursSections}
          <div className="select-day">
            <span className="fa fa-chevron-left fa-lg day-arrow" onClick={this.clickLeft}></span>
            <div className="day" onClick={this.clickRight}>
              {currentDay}
            </div>
            <span className="fa fa-chevron-right fa-lg day-arrow" onClick={this.clickRight}></span>
          </div>
          <div className="hours-dots">
            {hoursDots}
          </div>
        </div>
      );
    }
    else {
      return (<div></div>);
    }
  }
}

function mapStateToProps(state) {
  if (state.mongoData.data !== null) {
    return { hours: state.mongoData.data.hours };
  }
  else {
    return { loading: true };
  }
}

export default connect(mapStateToProps)(Hours);
