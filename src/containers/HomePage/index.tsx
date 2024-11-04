import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import Community from "./Community";
import HowToBuy from "./HowToBuy";
import IncomeSolution from "./IncomeSolution";
import OurMission from "./OurMission";
import Roadmap from "./Roadmap";
import TeamMember from "./TeamMember";
import Tokenomics from "./Tokenomics";
import OurPartner from "./OutPartner";
import "animate.css";

export interface BaseHomeProps {
  isActive?: boolean;
}

const children = [
  <IncomeSolution />,
  <OurPartner />,
  <OurMission />,
  <Tokenomics />,
  <HowToBuy />,
  <Roadmap />,
  <TeamMember />,
  <Community />,
];

const HomePage: React.FC = () => {
  const [activeKey, setActiveKey] = React.useState(0);

  React.useEffect(() => {
    const items = document.querySelectorAll("section");

    if (items.length > 0) {
      const handleIntersection: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(items).findIndex(
              (item) => item === entry.target
            );

            // Update state
            setActiveKey(index);
            // Add active class
            entry.target.classList.add("active");
            // Stop observation to prevent repeat triggering
            observer.unobserve(entry.target);
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.35,
      });

      items.forEach((item) => {
        observer.observe(item);
      });

      // Cleanup on unmount
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return (
    <Flex direction={"column"} position={"relative"}>
      {React.Children.map(children, (child, index) => (
        <section className="fade-in">
          {React.cloneElement(child, { isActive: activeKey === index })}
        </section>
      ))}
    </Flex>
  );
};

export default HomePage;
