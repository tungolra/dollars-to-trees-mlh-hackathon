import React, { useEffect, useState } from "react";
import { getEstimate } from "../api/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Slider from "../components/Slider";
import Category from "../components/Category";
import shoppingSVG from "../icons/shopping.svg";
import { Image } from "react-bootstrap";
import Tree from "../icons/tree.svg";
import { Table } from "react-bootstrap";
import AccordionBS from "../components/AccordionBS";

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
        <Row>
          <Col sm={12} md={4}>
            <Image src={shoppingSVG} fluid roundedCircle />
          </Col>
          <Col sm={12} md={8}>
            <div>{response ? renderTrees(response.co2e) : "Loading..."}</div>
          </Col>
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
            <p
              className="bg-dark mx-auto text-white font-bold"
              style={{
                marginTop: "3vmin",
                width: "50%",
                padding: "10px",
                fontSize: "1.5rem",
                borderRadius: "10px",
                opacity: "0.6",
              }}
            >
              {response ? calculateTreeCount(response.co2e) : 0} trees are
              needed to offset your spend
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={8}>
            <AccordionBS />
          </Col>
          <Col sm={12} md={4}>
            <Table striped hover className="bg-light table">
              <thead>
                <tr>
                  <th colSpan={2}>Emissions of Constituent Gases</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CO2e</td>
                  <td>
                    {response
                      ? `${response.co2e?.toFixed(2)} ${response.co2e_unit}`
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>CO2</td>
                  <td>
                    {response
                      ? `${response.constituent_gases?.co2?.toFixed(2)} ${
                          response.co2e_unit
                        }`
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>CH4</td>
                  <td>
                    {response
                      ? `${response.constituent_gases?.ch4?.toFixed(2)} ${
                          response.co2e_unit
                        }`
                      : "Loading..."}
                  </td>
                </tr>
                <tr>
                  <td>NO2</td>
                  <td>
                    {response
                      ? `${response.constituent_gases?.n2o?.toFixed(2)} ${
                          response.co2e_unit
                        }`
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
