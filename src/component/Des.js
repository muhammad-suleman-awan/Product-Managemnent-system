import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Des() {
  return (
    <div style={{ marginTop: "-30px", marginLeft: "30px",backgroundColor:"#f7faff", height: "530px" }}>
      <div className="mt-5 ">
        <Card style={{ width: "10rem", border: "none",backgroundColor:"#f7faff"  }}>
          <ListGroup variant="flush">
            <ListGroup.Item className="  font-weight-bold text-uppercase text-secondary w-100 h4">
              PRODUCT
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>

      <div class="row gap-2">
        <Card style={{ width: "14rem", height: "13rem" }}>
          <Card.Body>
            <Card.Title class="h1 text-center">
              <h3>I</h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ marginTop: "30px" }}>Iron</h5>
              <p> BLACK+DECKER IR40V Textile Iron, Standard</p>
            </Card.Text>
            <div style={{ marginTop: "-10px" }}>
              <Card.Link href="#"  >486PK</Card.Link>
              <Card.Link href="#" style={{ marginLeft: "100px" }}>
                +
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem", height: "13rem" }}>
          <Card.Body>
            <Card.Title class="h1 text-center">
              <h3>M</h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ marginTop: "30px" }}>Mice</h5>
              <p>Ace Aim Lab Edition Gaming Mous</p>
            </Card.Text>
            <div style={{ marginTop: "-10px" }}>
              <Card.Link href="#">156PK</Card.Link>
              <Card.Link href="#" style={{ marginLeft: "100px" }}>
                +
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem", height: "13rem" }}>
          <Card.Body>
            <Card.Title class="h1 text-center">
              <h3>C</h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ marginTop: "30px" }}>Cup</h5>
              <p> Modern 40 oz Tumbler with Handle</p>
            </Card.Text>
            <div style={{ marginTop: "-10px" }}>
              <Card.Link href="#">965PK</Card.Link>
              <Card.Link href="#" style={{ marginLeft: "100px" }}>
                +
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
        <Card style={{ width: "14rem", height: "13rem" }}>
          <Card.Body>
            <Card.Title class="h1 text-center">
              <h3>G</h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ marginTop: "30px" }}>Glasses</h5>
              <p> Brain Trust Round Reading Glasse</p>
            </Card.Text>
            <div style={{ marginTop: "-10px" }}>
              <Card.Link href="#">545PK</Card.Link>
              <Card.Link href="#" style={{ marginLeft: "100px" }}>
                +
              </Card.Link>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", height: "13rem" }}>
          <Card.Body>
            <Card.Title class="h1 text-center">
              <h3>C</h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ marginTop: "30px" }}>Calculators</h5>
              <p> Texas Instruments TI-36X Pro Engineering</p>
            </Card.Text>
            <div style={{ marginTop: "-10px" }}>
              <Card.Link href="#">5446PK</Card.Link>
              <Card.Link href="#" style={{ marginLeft: "100px" }}>
                +
              </Card.Link>
            </div>
          </Card.Body>
        </Card>

        <Card style={{ width: "14rem", height: "13rem" }}>
          <Card.Body>
            <Card.Title class="h1 text-center">
              <h3>P</h3>
            </Card.Title>
            <Card.Text>
              <h5 style={{ marginTop: "30px" }}>Paper</h5>
              <p>Oxford Composition Notebooks 6 Pack</p>
            </Card.Text>
            <div style={{ marginTop: "-10px" }}>
              <Card.Link href="#">1516PK</Card.Link>
              <Card.Link href="#" style={{ marginLeft: "100px" }}>
                +
              </Card.Link>
            </div>
          </Card.Body>
        </Card>
      </div>

      <div
        style={{
          width: "750px",
          backgroundColor:"#f7faff"
        }}
      ></div>
    </div>
  );
}

export default Des;
