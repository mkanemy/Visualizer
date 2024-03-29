import '../Styles/Home.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import React, { Component }  from 'react';

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        <div className="Home-header-container"> 
          <p className="Home-header-title">Visualizer</p>
          <p className="Home-header-text">Select a category below to continue!</p>
        </div>
      </header>
      <body className="Home-body">
        <AlgorithmCard title={"Sorting Algorithms"} body={"Bubble, Insertion, Selection, Merge, Quick"} link={"/sort"} img={require("../Images/sorting.png")} />
        <AlgorithmCard title={"Path Finding Algorithms"} body={"Dijkstras"} link={"/path"} img={require("../Images/path.png")} />
      </body>
    </div>
  );
}

function AlgorithmCard(props) {
  return (
    <a className="Home-AlgorithmCard" href={props.link}>
      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt="Image of page"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.body}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

export default Home;
