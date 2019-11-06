import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./conference/Calendar";

class NextConferences extends React.Component {
  render () {
    return(
      <section className="event">
				<h2>Next events</h2>

				<div className="pure-g">
          <Calendar month="November" day="13 & 18" weekDay="" />

					<div className="pure-u-sm-1-1 pure-u-md-3-5 pure-u-lg-4-5">
						<p className="first-paragraph">
							Build Stuff 2019
						</p>

						<p className="first-paragraph">
							Is There A Needle In The Haystack? Using Python To Narrow Down The Search For Life In Our Galaxy
						</p>

						<p>
							The Milky Way is a spiral galaxy, but what you might not know is that life in any planet - or moon, or basically anything - that crosses one of the Galaxy's arms is (probably) doomed.
						</p>
						<p>
							Looking for life in other planets is a herculean task, there are just too many of them. But what if we can look only into those that, like our solar system, swirls calmly around, never crossing the danger zone? That can make the task doable.
						</p>
						<p>
							Why are the arms dangerous? Why does our sun look safe? What does it have to do with code (hint: it has something to do with Python and galpy)? Well, come aboard and see it yourself.
						</p>

						<section style="text-align: center">
							<img src="/img/conferences/2019-build-stuff/build-stuff-19.png" className="promo-image glightbox" alt="Astronomy" style="height: 230px; width: auto">
						</section>

						<p>
							This talk will be done in partnership with <a href="mailto:lucassamp98@gmail.com">Lucas Sampaio de Amorim</a>.
						</p>
						<p>
							The first talk will be given on Vilnius, Lithuania, on November 13. The second on Kiev, Ukraine, on November 18.
						</p>

						<section className="conference-icon">
							<a href="https://goo.gl/maps/o3VN7GpYeAqpQ12S7" target="_blank">
								<img src="/img/conferences/location.svg" />
							</a>
							<br />
							Location
						</section>
						<section className="conference-icon">
							<a href="https://www.buildstuff.events/" target="_blank">
								<img src="/img/projects/url.png" />
							</a>
							<br />
							Website
						</section>
						<section className="conference-icon">
							<a href="https://www.buildstuff.lt/get-tickets" target="_blank">
								<img src="/img/conferences/tickets.png" />
							</a>
							<br />
							Tickets
						</section>
					</div>
				</div>

			</section>
    )
  }
}

export default NextConferences;
