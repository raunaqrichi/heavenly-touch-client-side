import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const image = "https://preview.colorlib.com/theme/tralive/assets/img/gallery/xabout.png.pagespeed.ic.ZsrvwBYE3S.webp"
    return (
        <div>
            <Container>
  <Row>
    <Col xs={12} lg={6}><Image src={image} fluid/></Col>
    <Col xs={12} lg={6}>
    <div >
    <h1>Get ready for real time adventure</h1>
    <p>
    Let’s start your journey with us, your dream will come true. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
    </p>
    <p>
    Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
    <p>
    When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.
    </p>
    <Link to='/Home'><Button variant='secondary'>Book Your Destination</Button></Link>
    </div>
    </Col>
    </Row>
        </Container>
        </div>
    );
};

export default AboutUs;