import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { ToastContainer, toast } from 'react-toastify';

import "./style.css";


 

function App() {
  function submitform(e) {
    e.preventDefault();
    console.log("form submitted");
  
  toast.success('form submitted', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",

});
 }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"

      />
      <h1 className='text-danger text-center my-5'>CURD MERN stack project start</h1>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 '>
            <h3 className='border text-center'>create item</h3>
            <Form>
              <Row className="mb-3 my-5">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Iteam Name</Form.Label>
                  <Form.Control type="email" placeholder="Enter Iteam name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="Description" placeholder="Entre Description" />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Purchase Price</Form.Label>
                  <Form.Control type='number' placeholder='Enter Selling Price' />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Selling Price</Form.Label>
                  <Form.Control type="number" placeholder="Enter selling price" />
                </Form.Group>
              </Row>


              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control type='number' placeholder='Enter Quantity' />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Unit</Form.Label>
                  <Form.Select defaultValue="Choose Unit">
                    <option>choose Unit </option>
                    <option>pice</option>
                    <option>Box</option>
                    <option>Kg</option>
                    <option>litter</option>
                    <option>Gram</option>
                  </Form.Select>
                </Form.Group>


              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <div className='text-center'>
                <Button  
                  variant="primary"
                  type="submit"
                   className='w-50'
                  onClick={submitform} >
                  Submit
                </Button>
              </div>
            </Form>

          </div>
          <div className='col-md-6'>
            <h3 className='border text-center'>Get list</h3>
            <Table striped bordered hover variant="white my-5">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Item name</th>
                  <th>Description</th>
                  <th>Purchase Price</th>
                  <th>Selling Price</th>
                  <th>Quantity</th>
                  <th>Unit</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Pen</td>
                  <td>Jel pen</td>
                  <td>10</td>
                  <td>20</td>
                  <td>10</td>
                  <td>Box </td>
                  <td className='d-flex '>
                    <button className='btn btn-success mx-2'>Edit</button>
                  <button className='btn btn-danger'>delate</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Book</td>
                  <td>note book</td>
                  <td>10</td>
                  <td>20</td>
                  <td>10</td>
                  <td>Box </td>
                   <td className='d-flex '>
                    <button className='btn btn-success mx-2'>Edit</button>
                  <button className='btn btn-danger'>delate</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Pen</td>
                  <td>Jel pen</td>
                  <td>10</td>
                  <td>20</td>
                  <td>10</td>
                  <td>Box </td>
                   <td className='d-flex '>
                    <button className='btn btn-success mx-2'>Edit</button>
                  <button className='btn btn-danger'>delate</button>
                  </td>
                </tr>
              </tbody>
            </Table>

          </div>


        </div>
      </div>
    </>
  )
}

export default App
