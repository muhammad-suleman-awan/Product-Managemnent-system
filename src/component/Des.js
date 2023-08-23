import { array } from "prop-types";
import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Des = ({ myData }) => {
  // console.log("Props in clid comp myDatamyData  myData ",myData);
  return (
    <div>
      <div style={{ display: "flex", backgroundColor: "#f7faff" }}>
        <div className="mt-5 ">
          <Card
            style={{
              width: "10rem",
              border: "none",
              backgroundColor: "#f7faff",
            }}
          >
            <ListGroup variant="flush">
              <ListGroup.Item className="  font-weight-bold text-uppercase text-secondary w-100 h4">
                PRODUCT
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </div>

     
      {/* {console.log("I AM HERE! IN DATA ",myData)} */}
      <div style={{   width: "810px", gap: "2rem" ,  display: "grid",
  gridGap: "10px",
  gridTemplateColumns:" 1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr",  }}>
        {myData &&
          Array.isArray(myData) &&
          myData.slice(0, 6).map((record, index) => {
            console.log("record data in index === ", record);
            // Your rendering logic for each record

            let firstChar = record.name.charAt(0); // Returns "w"
            console.log("First Character in ::::: ", firstChar);

            return (
              <div>
                <div class="gap-2 " key={record.id}>
                  <div>
                    <Card id="" style={{ width: "14rem", height: "12rem" }}>
                      <Card.Body>
                        <Card.Title class="h1 text-center">
                          <h3 style={{textTransform:"uppercase"}}>{firstChar}</h3>
                        </Card.Title>
                        <Card.Text>
                          <h5 style={{ marginTop: "30px" }}>{record.name}</h5>
                          <p> {record.description} </p>
                        </Card.Text>
                        <div style={{ marginTop: "-10px" }}>
                          <Card.Link href="#">{record.price}</Card.Link>
                          <Card.Link href="#" style={{ marginLeft: "100px" }}>
                            +
                          </Card.Link>
                        </div>
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Des;
