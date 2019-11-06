import React from "react";
import ReactDOM from "react-dom";

import Calendar from "./conference/Calendar";
import Icon from "./conference/Icon";

class NextConferences extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      conferences: [
        {
          name: "Build Stuff 2019",
          talk: "Is There A Needle In The Haystack? Using Python To Narrow Down The Search For Life In Our Galaxy",
          paragraphs: [
            "The Milky Way is a spiral galaxy, but what you might not know is that life in any planet - or moon, or basically anything - that crosses one of the Galaxy's arms is (probably) doomed.",
            "Looking for life in other planets is a herculean task, there are just too many of them. But what if we can look only into those that, like our solar system, swirls calmly around, never crossing the danger zone? That can make the task doable.",
            "Why are the arms dangerous? Why does our sun look safe? What does it have to do with code (hint: it has something to do with Python and galpy)? Well, come aboard and see it yourself.",
            "This talk will be done in partnership with <a href=\"mailto:lucassamp98@gmail.com\">Lucas Sampaio de Amorim</a>",
            "The first talk will be given on Vilnius, Lithuania, on November 13. The second on Kiev, Ukraine, on November 18."
          ],
          promo: {
            image: "/img/conferences/2019-build-stuff/build-stuff-19.png",
            alt: "Astronomy",
            class: "build-stuff-2019"
          },
          icons: {
            location: {
              link: "https://goo.gl/maps/o3VN7GpYeAqpQ12S7"
            },
            website: {
              link: "https://www.buildstuff.events"
            },
            tickets: {
              link: "https://www.buildstuff.lt/get-tickets"
            }
          }
        }
      ]
    };
  }

  buildConference(conference, index) {
    return (
      <div className="pure-g" key={`conference-${index}`}>
        <Calendar month="November" day="13 & 18" weekDay="" />

        <div className="pure-u-sm-1-1 pure-u-md-3-5 pure-u-lg-4-5">
          <p className="first-paragraph">
            {conference.name}
          </p>

          <p className="first-paragraph">
            {conference.talk}
          </p>

          {conference.paragraphs.map((paragraph, paragraphIndex) => {
            return <p key={`paragraph-${index}-${paragraphIndex}`}>{paragraph}</p>
          })}

          if (conference.promo) {
            <section className="text-center">
              <img src={conference.promo.image} className={`promo-image glightbox ${conference.promo.class}`} alt={conference.promo.alt} />
            </section>
          }

          if (conference.icons.location) {
            <Icon link={conference.icons.location.link} name="Location" />
          }

          if (conference.icons.website) {
            <Icon link={conference.icons.website.link} name="Website" />
          }

          if (conference.icons.tickets) {
            <Icon link={conference.icons.tickets.link} name="Tickets" />
          }
        </div>
      </div>
    )
  }

  render () {
    const items = this.state.conferences.map(this.buildConference);

    return(
      <section className="event">
				<h2>Next events</h2>

        {items}
			</section>
    )
  }
}

export default NextConferences;
