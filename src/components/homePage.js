
import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios'
import './homePage.css'; 

function Navbar() {
  const [email, setEmail] = useState('');
  const [formData, setFormData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user/form');
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="logo.png" alt="Logo" /> 
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Clients</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="containerone">
        <h1>Create Amazing Landing Page With Nody</h1>
        <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione sequinesciunt.</p>
      </div>
      <div className="image">
        <img src="main.png" alt="Image" />
      </div>
      <div className="containerform">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="emailInput"
              placeholder="Enter your email..."
              value={email}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </div>
      <div className="containertwo">
        <h2>Our Services</h2>
        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil atque corrupti molestiae.</p>
</div>
<div className="containerthree">
        <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="analytics.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Awesome Support</h5>
              <p className="card-text">Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
              <p className="card-text">More--> </p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="support.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Analytics Security</h5>
              <p className="card-text">Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
              <p className="card-text">More--> </p>
             
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="data.png" alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Data Privacy</h5>
              <p className="card-text">Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
              <p className="card-text">More--> </p>
            </div>
          </div>
        </div>
      </div>
      <div className="containertwo">
        <h2>Our Features</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
</div>
<div className="imagetwo">
        <img style={{height:'500px',marginLeft:'50px'}}src="main2.png" alt="Image" />
      </div>
      <div className="new-container">
  <div className="card-deck">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Work With Existing Apps</h5>
        <p className="card-text">Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
        <p style={{color:'blue'}}className="card-text">More Information -></p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Easy Email Marketing With Us</h5>
        <p className="card-text">Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
        <p style={{color:'blue'}}className="card-text">More Information -> </p>
      </div>
    </div>
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Get Private Customer Feedback </h5>
        <p className="card-text">Omnicos directe al desirabilite de une nov lingua franca a refusa continuar payar custosi traductores.</p>
        <p style={{color:'blue'}}className="card-text">More Information -></p>
      </div>
    </div>
  </div>
</div>
<div className="containertwo">
        <h2>Our Latest Project</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
</div>
<div className="container-picture">
    <div className="row">
      <div className="col-md-4">
        <img src="picture1.jpg" alt="Picture 1" />
        <h3>Professional Designer</h3>
        <p>UI/UX Designer</p>
      </div>
      <div className="col-md-4">
        <img src="picture2.jpg" alt="Picture 2" />
        <h3>Product Designer</h3>
        <p>Web Designer</p>
      </div>
      <div className="col-md-4">
        <img src="picture3.jpg" alt="Picture 3" />
        <h3>Product Designer</h3>
        <p>PHP Development</p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <img src="picture4.jpg" alt="Picture 4" />
        <h3>Product Designer</h3>
        <p>React Developer</p>
      </div>
      <div className="col-md-4">
        <img src="picture5.jpg" alt="Picture 5" />
        <h3>Design Development</h3>
        <p>UI/UX Develope</p>
      </div>
      <div className="col-md-4">
        <img src="picture6.png" alt="Picture 6" />
        <h3>Graphic Development</h3>
        <p>Web Designer</p>
      </div>
    </div>
  </div>
  <div className="container-contact">
        <h2>Contact Us</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
</div>
<div className="container-picturecontact">
    <div className="row">
      <div className="col-md-4">
        <img style={{height:'350px', width:'260px'}} src="contact.png" alt="Picture 1" />
        <h3>Are You Facing Any Problem..?</h3>
        <p>It va esser tam simplic quam Occidental in fact it va esser Occidental angles quam un skeptic cambridge es.</p>
        <button type="submit" className="btn btn-primary">Start chat here</button>  
      </div>
      </div>
    </div>
     <div className="container-contactinfo">
        <h2>Get in Touch</h2>
        <p>Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit laboriosam nisi commodi consequatur.</p>
        <Formik
        initialValues={{
          name: '',
          email: '',
          subject: '',
          message: ''
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          subject: Yup.string().required('Required'),
          message: Yup.string().required('Required')
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await fetch('http://localhost:3001/user/form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(values)
            });

            if (!response.ok) {
              throw new Error('Failed to submit form');
            }

            alert('Form submitted successfully!');
            resetForm();
          } catch (error) {
            console.error('Error:', error);
            alert('Failed to submit form');
          } finally {
            setSubmitting(false);
          }
        }}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" className="form-control" placeholder="Enter your name..." />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <Field type="email" name="email" className="form-control" placeholder="Enter your email..." />
            <ErrorMessage name="email" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <Field type="text" name="subject" className="form-control" placeholder="Enter Subject..." />
            <ErrorMessage name="subject" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" className="form-control" placeholder="Enter Message..." />
            <ErrorMessage name="message" component="div" className="error-message" />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
    </div>
     
      <footer className="footer">
        <div className="container">
            <img style={{height:'200',width:'200px'}} src="logo.png" alt="image"></img>
          <p style={{fontSize:'1rem'}}>Cras ultricies mi eu turpis sit hendrerit fringilla vestibulum ante ipsum primis in faucibus ultrices posuere cubilia.</p>
          <div className="footer-links">
            <a style={{marginLeft:'100px'}}href="#">Join Us In Instagram</a>
            <div className="footer-menu">
              <ul>
                <li><h5>Customer</h5></li>
                <li>Works</li>
                <li>Strategy</li>
                <li>Releases</li>
                <li>Press</li>
                <li>Mission</li>
              </ul>
              <ul>
                <li><h5>Product</h5></li>
                <li>Trending</li>
                <li>Popular</li>
                <li>Customers</li>
                <li>Features</li>
                <li>Learn More</li>
              </ul>
              <ul>
                <li><h5>Developers</h5></li>
                <li>Support</li>
                <li>Customer Service</li>
                <li>Get Started</li>
                <li>Guide</li>
              </ul>
    
            </div>
          </div>
        </div>
        <p>2024 © Nody. Develop By Themesdesign</p>
      </footer>
      <div className="container-fetch">
     <h2>Form Data</h2>
     <ul>
       {formData.map(item => (
         <li key={item._id}>
           <strong>Name:</strong> {item.name}<br />
           <strong>Email:</strong> {item.email}<br />
           <strong>Subject:</strong> {item.subject}<br />
           <strong>Message:</strong> {item.message}<br />
         </li>
       ))}
     </ul>
   </div>
 </>

  );
}

export default Navbar;
