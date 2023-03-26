import React, { useEffect, useState } from "react";
import { getEstimate } from "../api/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "../components/Slider";
import Category from "../components/Category";
import shoppingSVG from "../icons/shopping.svg";
import { Image } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import Tree from "../icons/tree.svg";
import { Table } from "react-bootstrap";

interface ApiResponse {
  data: string[] | null;
  co2e: number | null;
  co2e_unit: string | null;
  constituent_gases: {
    co2e_total: number | null;
    co2e_other: number | null;
    co2: number | null;
    ch4: number | null;
    n2o: number | null;
  } | null;
}

const calculateTreeCount = (co2e: number | null): number => {
  if (!co2e) {
    return 0;
  }
  const trees = co2e / 22;
  return Math.floor(trees);
};

function renderTrees(co2e: number | null) {
  const treeCount = calculateTreeCount(co2e);
  const trees = [];
  for (let i = 0; i < treeCount; i++) {
    trees.push(<Image src={Tree} style={{ maxWidth: "50px" }} />);
  }
  return trees;
}

export default function EstimatorPage(): any {
  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [activityId, setActivityId] = useState("consumer_goods-type_clothing");
  const [money, setMoney] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("Clothing");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getEstimate(activityId, money);
        if (response.ok) {
          const data = await response.json();
          //   console.log(data);
          setResponse(data);
        } else {
          console.log("Error fetching data: ", response.statusText);
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, [activityId, money]);

  return (
    <div>
      <Container
        className="estimator-page-container"
        style={{ maxWidth: "80%", margin: "0 auto" }}
      >
        <Row >
          <Col sm={12} md={4}>
            <Image src={shoppingSVG} fluid roundedCircle />
          </Col>
          <Col sm={12} md={8}>
            <div>{response ? renderTrees(response.co2e) : "Loading..."}</div>
          </Col>
          {/* <a href="https://iconscout.com/icons/tree" target="_blank">Tree Icon</a> by <a href="https://iconscout.com/contributors/yogiaprelliyanto" target="_blank">Yaprativa</a> */}
        </Row>
        <Row>
          <Col>
            <div style={{ width: "100%", marginBottom: "3vmin" }}>
              <Category
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                setActivityId={setActivityId}
              />
            </div>
            <Slider setMoney={setMoney} />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  co2e: Total carbon dioxide equivalent for entire trip.
                </Accordion.Header>
                <Accordion.Body>
                  CO2e is used as a unit of measurement to help quantify the
                  overall impact of a particular activity on the environment.
                  This is important because greenhouse gases contribute to
                  global warming and climate change, which can have severe
                  consequences on ecosystems, wildlife, and human societies.
                </Accordion.Body>{" "}
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  co2: The amount of carbon dioxide (CO2) emitted per unit of
                  activity expressed as kgCO2.
                </Accordion.Header>
                <Accordion.Body>
                  Carbon dioxide (CO2) is one of the primary greenhouse gases
                  released into the atmosphere as a result of human activities,
                  such as burning fossil fuels. It is a major contributor to
                  global warming and climate change, as it traps heat in the
                  Earth's atmosphere, causing temperatures to rise. Reducing CO2
                  emissions is critical to mitigating the effects of climate
                  change.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  ch4: The amount of methane (CH4) emitted per unit of activity
                  expressed as kgCH4.
                </Accordion.Header>
                <Accordion.Body>
                  Methane (CH4) is a potent greenhouse gas that is released into
                  the atmosphere from a variety of sources, including
                  agriculture, natural gas production, and landfills. It is much
                  more effective at trapping heat than CO2, although it doesn't
                  persist in the atmosphere as long. As a result, reducing
                  methane emissions is an important strategy for mitigating the
                  effects of climate change.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  no2: The amount of nitrous oxide (N2O) emitted per unit of
                  activity expressed as kgN2O
                </Accordion.Header>
                <Accordion.Body>
                  Nitrous oxide (N2O) is another potent greenhouse gas that is
                  released into the atmosphere as a result of various human
                  activities, such as agriculture and transportation. Like
                  methane, it is much more effective at trapping heat than CO2,
                  although it doesn't persist in the atmosphere as long.
                  Reducing N2O emissions is also an important strategy for
                  mitigating the effects of climate change.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col sm={12} md={4}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Emissions of Constituent Gases</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CO2e</td>
                  <td>
                    {response
                      ? `${response.co2e} ${response.co2e_unit}`
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>CO2</td>
                  <td>
                    {response
                      ? `${response.constituent_gases?.co2} ${response.co2e_unit}`
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>CH4</td>
                  <td>
                    {response
                      ? `${response.constituent_gases?.ch4} ${response.co2e_unit}`
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>NO2</td>
                  <td>
                    {response
                      ? `${response.constituent_gases?.n2o} ${response.co2e_unit}`
                      : "Loading..."}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
