import { FC } from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import itIcon from "@/assets/itIcon.png";
import Image from "next/image";

const experiences = [
  {
    title: "Software Developer",
    company: "NAVLIN by EVERSANA",
    list: [
      "• Responsible for navlin. (https://qa.data.navlin.com/alspc/#!/) front-end development, operation, and maintenance.",
      "• Developing features to enhance the user experience using JavaScript, React JS, Redux.",
      "• Design the page UI and develop related components.",
      "• Use charting tools to convert data into visual charts (Highcharts).",
      "• Creating unit tests with playwright.",
      "• Provide visualized chart data for thousands of medications across different regions for global customers.",
    ],
    time: "2023.02-2024.10",
  },
  {
    title: "Software Developer",
    company: "GrubMarket",
    list: [
      "• Responsible for wholesale dept. (https://erp.wholesaleware.com/#/) front-end development, operation, and maintenance.",
      "• Collaborating with development teams and product managers to create innovative software solutions.",
      "• Developing features to enhance the user experience using JavaScript, React JS, Redux.",
      "• Building reusable components and front-end libraries for future use.",
      "• Optimizing web pages for maximum speed and scalability.",
      "• Creating unit tests with Jest when needed.",
    ],
    time: "2021.09-2023.01",
  },
  {
    title: "Full Stack Developer– Project Base",
    company: "Anime House ",
    list: [
      "• Developing front-end website architecture and back-end website applications",
      "• Designing user interactions on the web page.",
      "• Creating servers and databases for functionality",
      "• Troubleshooting, debugging and upgrading the website and application consistently",
    ],
    time: "2021.07-2022.07",
  },
  {
    title: "Full Stack Developer – Project Base",
    company: "Infinmax company",
    list: [
      "• In charge of the ERP platform of the real estate industry",
      "• Collaborate with different dept. to create innovative software solutions.",
      "• Create new, dynamic, front-end, and back-end software products and apps that are dynamic and visually appealing.",
      "• Design apps from scratch using ReactJS, .NET Core, SQL Server, and many other modern technologies, such as D3 and xlsx",
    ],
    time: "2020.10-2021.09",
  },
  {
    title: "Full Stack Developer - Internship",
    company: "Visual Medical Coaching",
    list: [
      "• Plan and complete the database transition from MongoDB into the SQL server.",
      "• Build user interfaces that interact with RESTful APIs",
      "• Develop new features for the application using. NET.",
    ],
    time: "2019.12-2020.08",
  },
];

const Resume: FC = () => {
  return (
    <div>
      <h3 className="text-white text-[35px] text-center">Work Experience.</h3>
      <div>
        <VerticalTimeline>
          {experiences.map((experience) => (
            <VerticalTimelineElement
              key={experience.title}
              className="vertical-timeline-element--work"
              contentStyle={{ background: " #a136be ", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date={experience.time}
              iconStyle={{ background: " #ffffff ", color: "#fff" }}
              icon={<Image src={itIcon} alt="" />}
            >
              <h2 className="text-white vertical-timeline-element-title">
                <span className="text-white text-[24px]">{experience.title}</span>
              </h2>
              <h4 className="vertical-timeline-element-subtitle">
                {experience.company}
              </h4>
              <ul>
                {experience.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};
export default Resume;
