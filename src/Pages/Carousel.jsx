// Carousel.jsx
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

// Import images
import crsl1 from './crsl-1.jpg';
import crsl2 from './crsl-2.jpg';
import crsl3 from './crsl-3.jpg';
import crsl4 from './crsl-4.jpg';

function ExampleCarousel() {
    const items = [
        {
            description: "Description for Image 1",
            image: crsl1
        },
        {
            description: "Description for Image 2",
            image: crsl2
        },
        {
            description: "Description for Image 3",
            image: crsl3
        },
        {
            description: "Description for Image 4",
            image: crsl4
        }
    ];

    return (
        <Carousel
            animation="slide"
            autoPlay={true}
            interval={1000}
            height="400px"
        >
            {items.map((item, i) => <Item key={i} item={item} />)}
        </Carousel>
    );
}

function Item(props) {
    return (
        <Paper>
            <img
                src={props.item.image}
                alt={`Image ${props.item.description}`}
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
            <div style={{ padding: '10px', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', textAlign: 'center' }}>
                <p>{props.item.description}</p>
            </div>
        </Paper>
    );
}

export default ExampleCarousel;
