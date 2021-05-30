import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

const DesktopTimeLine = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#4DB4BA", color: "#fff" }}
        icon={<div className="timeline__element">1</div>}
      >
        <h3 className="vertical-timeline-element-title">LOREM IPSUM</h3>
        <h4 className="vertical-timeline-element-subtitle">podtytuł</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
          sollicitudin massa. Maecenas nec venenatis neque. Cras sem elit,
          auctor ac ex vitae, volutpat condimentum nisi.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#4DB4BA", color: "#fff" }}
        icon={<div className="timeline__element">2</div>}
      >
        <h3 className="vertical-timeline-element-title">LOREM IPSUM</h3>
        <h4 className="vertical-timeline-element-subtitle">podtytuł</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
          sollicitudin massa. Maecenas nec venenatis neque. Cras sem elit,
          auctor ac ex vitae, volutpat condimentum nisi.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#4DB4BA", color: "#fff" }}
        icon={<div className="timeline__element">3</div>}
      >
        <h3 className="vertical-timeline-element-title">LOREM IPSUM</h3>
        <h4 className="vertical-timeline-element-subtitle">podtytuł</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
          sollicitudin massa. Maecenas nec venenatis neque. Cras sem elit,
          auctor ac ex vitae, volutpat condimentum nisi.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
        iconStyle={{ background: "#4DB4BA", color: "#fff" }}
        icon={<div className="timeline__element">4</div>}
      >
        <h3 className="vertical-timeline-element-title">LOREM IPSUM</h3>
        <h4 className="vertical-timeline-element-subtitle">podtytuł</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc interdum
          sollicitudin massa. Maecenas nec venenatis neque. Cras sem elit,
          auctor ac ex vitae, volutpat condimentum nisi.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        style={{ marginBottom: 164 }}
        iconStyle={{ background: "#4DB4BA", color: "#fff" }}
        icon={<ArrowDownwardIcon style={{ fontSize: "large" }} />}
      />
    </VerticalTimeline>
  );
};

export default DesktopTimeLine;
