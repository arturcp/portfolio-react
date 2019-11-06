import React from "react";
import ReactDom from "react-dom";

class Calendar extends React.Component {
  render () {
    <div className="pure-u-sm-1-1 pure-u-md-2-5 pure-u-lg-1-5 outer-calendar">
      <section className="custom-calendar">
        <div className="signboard outer">
          <div className="signboard front inner anim04c">
            <ul className="calendarMain anim04c">
              <li className="month anim04c">
                <span>{this.props.month}</span>
              </li>
              <li className="date anim04c">
                <span style="font-size: 22px;">{this.props.day}</span>
              </li>
              <li className="day anim04c">
                <span>{this.props.weekDay}</span>
              </li>
            </ul>
          </div>

          <div className="signboard left inner anim04c"></div>
          <div className="signboard right inner anim04c"></div>
        </div>
      </section>
    </div>
  }
}
