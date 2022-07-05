import React from "react";
//removed baby rigo image
const CardContainer = () => {
	<>
<CardComponent cardTitle={"Card Title"} cardText={"This is an example of test Ill use for the first card."} cardButton={"Find Out More!"}/>
<CardComponent cardTitle={"Card Title"} cardText={"In the next card I'll use some other words like Lorem Ipsum, again and again and again."} cardButton={"Find Out More!"}/>
<CardComponent cardTitle={"Card Title"} cardText={"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"} cardButton={"Find Out More!"}/>
<CardComponent cardTitle={"Card Title"} cardText={"This is the last card where I'll add any kind of sentences. I hope I can do the next part correctly."} cardButton={"Find Out More!"}/>
	</>
}
//created card component
const CardComponent = (props) =>
{return <div className="card col-3">
  <img src="https://via.placeholder.com/500x325" className="card-img-top" alt="..."/>
	<div className="card-body">
    <h5 className="card-title">{props.cardTitle}</h5>
    <p className="card-text">{props.cardText}</p>
    <a href="#" className="btn btn-primary">{props.cardButton}</a>
  </div>
</div>
}


	

export default CardContainer;
