"use client"
import { Container, Grid } from '@mui/material';
import Head from 'next/head';
import { useState } from 'react';
import Marker from '@mui/icons-material/Room';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import Globe from '@mui/icons-material/Public';


export default function Home() {
  return (
    <>
      <ContactUs />
    </>
  );
}



















const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Add form submission logic here
  };
  return (
    <>
      <Head>
        <title>Sportswiz - Contact Us</title>
      </Head>

      <Container >
        <Grid container className="contact-form-container">
          <Grid item md={6} className="contact-form-left">
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
              <button type="submit">Send Message</button>
            </form>
          </Grid>
          <Grid item md={5} className="contact-form-right">
            <h2>Contact us</h2>
            <p><a href='#'><Marker /></a> Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            <p><a href='tel:2397548'><CallIcon /></a> Phone: + 1235 2355 98</p>
            <p><a href="mailto:someone@example.com"><MailIcon /> </a>Email: info@yoursite.com</p>
            <p><a href='#'><Globe /></a> Website: sportswiz.live</p>
          </Grid>
        </Grid>
      </Container>

    </>
  );
};

