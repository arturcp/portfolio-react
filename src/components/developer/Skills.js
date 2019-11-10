import React from "react";
import ReactDOM from "react-dom";

import Collapsible from "../Collapsible";

class Skills extends React.Component {
  render() {
    return(
      <Collapsible id="skills" title="Skills">
        <p>
  				&nbsp;
  			</p>
  			<span className="tooltip" data-tip="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ruby on Rails">
  				<img src="/img/skills/ruby.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="C# .Net">
  				<img src="/img/skills/c_sharp.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Jquery">
  				<img src="/img/skills/jquery.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="React">
  				<img src="/img/skills/react.svg" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Git">
  				<img src="/img/skills/git.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="TDD">
  				<img src="/img/skills/tdd.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Agile">
  				<img src="/img/skills/agile.gif" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Redis">
  				<img src="/img/skills/redis.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="MongoDB">
  				<img src="/img/skills/mongodb.svg" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Postgresql">
  				<img src="/img/skills/postgresql.svg" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Postgis">
  				<img src="/img/skills/postgis.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="MySQL">
  				<img src="/img/skills/mysql.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="SQL Server">
  				<img src="/img/skills/sql.jpg" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Memcached">
  				<img src="/img/skills/memcached.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="HTML">
  				<img src="/img/skills/html5.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="CSS">
  				<img src="/img/skills/css3.png" className="skill-icon" />
  			</span>
  			<span className="tooltip" data-tip="Docker">
  				<img src="/img/skills/docker.png" className="skill-icon" />
  			</span>
  			<p>&nbsp;</p>
      </Collapsible>
    )
  }
}

export default Skills;
