import React from "react";
import { Accordion } from "react-bootstrap";

export default function AccordionBS() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="bg-light font-weight-bold">
          CO2e: Total carbon dioxide equivalent for entire trip.
        </Accordion.Header>
        <Accordion.Body>
          CO2e is used as a unit of measurement to help quantify the overall
          impact of a particular activity on the environment. This is important
          because greenhouse gases contribute to global warming and climate
          change, which can have severe consequences on ecosystems, wildlife,
          and human societies.
        </Accordion.Body>{" "}
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          CO2: The amount of carbon dioxide (CO2) emitted per unit of activity
          expressed as kgCO2.
        </Accordion.Header>
        <Accordion.Body>
          Carbon dioxide (CO2) is one of the primary greenhouse gases released
          into the atmosphere as a result of human activities, such as burning
          fossil fuels. It is a major contributor to global warming and climate
          change, as it traps heat in the Earth's atmosphere, causing
          temperatures to rise. Reducing CO2 emissions is critical to mitigating
          the effects of climate change.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          CH4: The amount of methane (CH4) emitted per unit of activity
          expressed as kgCH4.
        </Accordion.Header>
        <Accordion.Body>
          Methane (CH4) is a potent greenhouse gas that is released into the
          atmosphere from a variety of sources, including agriculture, natural
          gas production, and landfills. It is much more effective at trapping
          heat than CO2, although it doesn't persist in the atmosphere as long.
          As a result, reducing methane emissions is an important strategy for
          mitigating the effects of climate change.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          NO2: The amount of nitrous oxide (N2O) emitted per unit of activity
          expressed as kgN2O
        </Accordion.Header>
        <Accordion.Body>
          Nitrous oxide (N2O) is another potent greenhouse gas that is released
          into the atmosphere as a result of various human activities, such as
          agriculture and transportation. Like methane, it is much more
          effective at trapping heat than CO2, although it doesn't persist in
          the atmosphere as long. Reducing N2O emissions is also an important
          strategy for mitigating the effects of climate change.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
