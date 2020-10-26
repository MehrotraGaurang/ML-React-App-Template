import React, { Component } from 'react';
import './App.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        
      },
      result: ""
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData
    });
  }

  handlePredictClick = (event) => {
    const formData = this.state.formData;
    console.log(formData);
    this.setState({ isLoading: true });
    fetch('http://127.0.0.1:5000/prediction/', 
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(response => {
        this.setState({
          result: response.result,
          isLoading: false
        });
      });
  }

  handleCancelClick = (event) => {
    this.setState({ result: "" });
  }

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;

    return (
      <Container>
        <div>
          <h2 className="title" style={{fontSize: '60px'}}>Intelligent Discharge Planning</h2>
        </div>
        
        <div className="content" style={{width:"80%"}}>
          <div className="personalInfo" style={{fontSize: '25px'}}><b>PERSONAL INFORMATION:</b></div>
          <br></br>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Encounter ID</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Encounter ID" 
                  name="encounter_id"
                  value={formData.encounter_id}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Patient Number</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Patient Number" 
                  name="patient_nbr"
                  value={formData.patient_nbr}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Race</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter Race" 
                  name="race"
                  value={formData.race}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Gender</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.gender}
                  name="gender"
                  onChange={this.handleChange}
                  onClick={this.handleChange}>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Others</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Age</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Age in Number" 
                  name="age"
                  value={formData.age}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Weight</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Weight in pounds" 
                  name="weight"
                  value={formData.weight}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
        <div className="content" style={{width:"80%"}}>
          <div className="admission" style={{fontSize: '25px'}}><b>ADMISSION INFORMATION:</b></div>
          <br></br>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Admission Type</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.admission_type_id}
                  name="admission_type_id"
                  onChange={this.handleChange}
                  onClick={this.handleChange}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                  <option>9</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Discharge Disposition</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter number between 1 - 29" 
                  name="discharge_disposition_id"
                  value={formData.discharge_disposition_id}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Admission Source</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter number between 1 - 21" 
                  name="admission_source_id"
                  value={formData.admission_source_id}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Time in Hospital</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter stay in number of days" 
                  name="time_in_hospital"
                  value={formData.time_in_hospital}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Payer Code</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter code between 1 - 23" 
                  name="payer_code"
                  value={formData.payer_code}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Medical Speciality</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter number between 1 - 84" 
                  name="medical_specialty"
                  value={formData.medical_specialty}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Number of Lab Procedures</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter number of lab procedures performed" 
                  name="num_lab_procedures"
                  value={formData.num_lab_procedures}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Number of Procedures (Not Lab)</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter number of procedures" 
                  name="num_procedures"
                  value={formData.num_procedures}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Number of medications</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Number of medications" 
                  name="num_medications"
                  value={formData.num_medications}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Number of Outpatient</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Number of Outpatient in previous year" 
                  name="number_outpatient"
                  value={formData.number_outpatient}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Number of Emergency Visits</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Number of Emergency Visits in previous year" 
                  name="number_emergency"
                  value={formData.number_emergency}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Number of Inpatient</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter Number of Inpatient in previous year" 
                  name="number_inpatient"
                  value={formData.number_inpatient}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
        <div className="content" style={{width:"80%"}}>
          <div className="diagnosis" style={{fontSize: '25px'}}><b>DIAGNOSIS INFORMATION:</b></div>
          <br></br>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Diagnosis 1</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter primary diagnosis code" 
                  name="diag_1"
                  value={formData.diag_1}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Diagnosis 2</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter secondary diagnosis code" 
                  name="diag_2"
                  value={formData.diag_2}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Diagnosis 3</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter additional secondary diagnosis code" 
                  name="diag_3"
                  value={formData.diag_3}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Number of Diagnosis</Form.Label>
                <Form.Control 
                  type="number" 
                  placeholder="Enter number of diagnosis" 
                  name="number_diagnoses"
                  value={formData.number_diagnoses}
                  onChange={this.handleChange} />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Glucose Serum Test</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.max_glu_serum}
                  name="max_glu_serum"
                  onChange={this.handleChange}
                  onClick={this.handleChange}>
                  <option>Greater than 300</option>
                  <option>Greater than 200</option>
                  <option>Normal</option>
                  <option>None</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>A1c Test</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.A1Cresult}
                  name="A1Cresult"
                  onChange={this.handleChange}
                  onClick={this.handleChange}>
                  <option>Greater than 8</option>
                  <option>Greater than 7</option>
                  <option>Normal</option>
                  <option>None</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>Change in Medications</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.change}
                  name="change"
                  onChange={this.handleChange}
                  onClick={this.handleChange}>
                  <option>Change</option>
                  <option>No Change</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Diabetes Medications</Form.Label>
                <Form.Control 
                  as="select"
                  value={formData.diabetesMed}
                  name="diabetesMed"
                  onChange={this.handleChange}
                  onClick={this.handleChange}>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Control>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Change in 24 Feature for medications</Form.Label>
                <Form.Control 
                  type="text" 
                  placeholder="Enter total number of Changed in 24 Meds" 
                  name="numchange"
                  value={formData.numchange}
                  onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
          </Form>
        </div>
        <div className="content1" style={{width: '80%'}}>
          <Row>
            <Col>
              <Button
                block
                variant="success"
                disabled={isLoading}
                style={{borderRadius: '20px', fontSize: '25px'}}
                onClick={!isLoading ? this.handlePredictClick : null}>
                { isLoading ? 'Making prediction' : 'Predict' }
              </Button>
            </Col>
            <Col>
              <Button
                block
                variant="danger"
                disabled={isLoading}
                style={{borderRadius: '20px', fontSize: '25px'}}
                onClick={this.handleCancelClick}>
                Reset prediction
              </Button>
            </Col>
          </Row>
        </div>
        <div className="content1" style={{width: '80%'}}>
          {result === "" ? null :
              (<Row>
                <Col className="result-container">
                  <h5 id="result">{result}</h5>
                </Col>
              </Row>)
            }
        </div>
        <br></br>
        <a style={{marginLeft:'80%', fontSize:'10px', color:"white"}} href="http://www.freepik.com">Designed by Katemangostar / Freepik</a>
      </Container>
    );
  }
}

export default App;