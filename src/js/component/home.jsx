import React from "react";
import CardComponent from "./cardcomponent-body.jsx"
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return ( <><CardComponent cardTitle={"Card Title"} cardText={"This is an example of test Ill use for the first card."} cardButton={"Find Out More!"}/>
	<CardComponent cardTitle={"Card Title"} cardText={"In the next card I'll use some other words like Lorem Ipsum, again and again and again."} cardButton={"Find Out More!"}/>
	<CardComponent cardTitle={"Card Title"} cardText={"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"} cardButton={"Find Out More!"}/>
	<CardComponent cardTitle={"Card Title"} cardText={"This is the last card where I'll add any kind of sentences. I hope I can do the next part correctly."} cardButton={"Find Out More!"}/>
	</>
		
	);
};

export default Home;
