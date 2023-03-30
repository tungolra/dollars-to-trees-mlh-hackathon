import React, { useState } from "react";
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

type Factor = {
  co2e_total: number | null;
  co2: number | null;
  ch4: number | null;
  n2o: number | null;
  co2e_unit: string | null;
};

const calculateEmissions = (gas: number, money: number): number => {
  return gas * money;
};

const calculateTreeCount = (co2e: number | null): number => {
  if (!co2e) {
    return 0;
  }
  // 22 kgs of CO2e sequestered per tree
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
  const [emissionFactor, setEmissionFactor] = useState<Factor | null>(null);
  const [money, setMoney] = useState(0);

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
            <div>
              {emissionFactor && emissionFactor.co2e_total
                ? renderTrees(
                    calculateEmissions(emissionFactor.co2e_total, money)
                  )
                : "Loading..."}
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div style={{ width: "100%", marginBottom: "3vmin" }}>
              <Category setEmissionFactor={setEmissionFactor} />
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
              {emissionFactor && emissionFactor.co2e_total
                ? calculateTreeCount(
                    calculateEmissions(emissionFactor.co2e_total, money)
                  )
                : 0}{" "}
              trees are needed to offset your spend
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
                    {emissionFactor && emissionFactor.co2e_total
                      ? `${calculateEmissions(
                          emissionFactor.co2e_total,
                          money
                        ).toFixed(2)} ${emissionFactor.co2e_unit}`
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>CO2</td>
                  <td>
                    {emissionFactor && emissionFactor.co2
                      ? `${calculateEmissions(
                          emissionFactor?.co2,
                          money
                        ).toFixed(2)} ${emissionFactor.co2e_unit}`
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>CH4</td>
                  <td>
                    {emissionFactor && emissionFactor.ch4
                      ? `${calculateEmissions(
                          emissionFactor.ch4,
                          money
                        ).toFixed(2)} ${emissionFactor.co2e_unit}`
                      : "N/A"}
                  </td>
                </tr>
                <tr>
                  <td>NO2</td>
                  <td>
                    {emissionFactor && emissionFactor.n2o
                      ? `${calculateEmissions(
                          emissionFactor.n2o,
                          money
                        ).toFixed(2)} ${emissionFactor.co2e_unit}`
                      : "N/A"}
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
