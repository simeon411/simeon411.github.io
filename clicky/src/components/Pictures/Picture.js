import React, { Component } from "react";
import Jumbotron from "../Jumbotron";
import Nav from "../Nav";
import friends from "../../friends.json";


class Picture extends Component {
	 state = {
	    friends,
	    userScore: 0,
	    topScore: 0
	  };

	imageClicked = id => {
	    const friends = this.shuffleArray(this.state.friends);
	    //const friends = this.state.friends;
	    console.log(friends)
	    console.log(this.arrayObjectIndexOf(friends, id, "id"))
	    const index = this.arrayObjectIndexOf(friends, id, "id")
	    if (friends[index].clicked === 0){
	    	this.scoreIncrement();
	    	friends[index].clicked = 1;
	    	this.setState({ friends });
	    }
	    else{
	    	this.setState({userScore: 0});
	    	this.setState({topScore: 0});
	    	this.resetField();
	    }
  	}

  	arrayObjectIndexOf = (myArray, searchTerm, property) => {
	    for(var i = 0, len = myArray.length; i < len; i++) {
	        if (myArray[i][property] === searchTerm) return i;
	    }
	    return -1;
	}

  scoreIncrement = () => {
    this.setState({ userScore: this.state.userScore + 1 }, () => {this.setTopScore(this.state.userScore);});
  }

  setTopScore = (newTopScore) => {
    this.setState({ topScore: newTopScore });

  }

	shuffleArray = (array) => {
	  let i = array.length - 1;
	  for (; i > 0; i--) {
	    const j = Math.floor(Math.random() * (i + 1));
	    const temp = array[i];
	    array[i] = array[j];
	    array[j] = temp;
	  }
	  return array;
	}

  resetField = () => {
     {this.state.friends.map(friend => (
      	friend.clicked = 0
      ))}
  }


  render() {
    return (
      <div>
      	<Nav 
      		score= {this.state.userScore}
      		top= {this.state.topScore}
      	/>
        <Jumbotron />
        <div className="container">
        	<div className="row">
               {this.state.friends.map(friend => {
                  return (
                  	<div className = "col-sm-3" key={friend.id} onClick={() => this.imageClicked(friend.id)}>
                  		<div className="thumbnail">
	                      <img alt={friend.name} src={friend.image}  key={friend.id}/>
	                    </div>
	                </div>
                  );
                })}
        	</div>
        </div>
      </div> 
    );
  }
 }


export default Picture;

