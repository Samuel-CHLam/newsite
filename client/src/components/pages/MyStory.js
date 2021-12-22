import React, { Component } from "react";

import "../../utilities.css";
import TopBanner from "../modules/TopBanner.js"
import "./MyStory.css";
import myStoryBackground from "../../img/myStoryBanner.png";
import MyAlert from "../modules/MyAlert.js"

class Mystory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    return (
      <div className="App-container">
      <TopBanner 
          background={myStoryBackground}
          title={<>MY <span className="mystory-highlight"> STORY </span></>}
          content="Explore my exploration of mathematics and 
          how my belief in God shape my life."
          des={(<> Taken in 2020 right before I return to UK at the
          <i> "Instagram Pier" </i> in Hong Kong. Credit to Vincent Chung. </>)}
        />
      <div className="u-block">
        <MyAlert 
            alerttype="yellow"
            content="Congratulations! If you see this page, you are probably my best friend (or you have actually looked 
              into my Github repo! This is how I would introduce myself if I were asked to share my testimony as a christian. 
              Unfortunately the following testimony has not been proofreaded, so I welcome any feedback from you!"
          />
      </div>
      <div className="u-block">
        <p> I was born in 2002. Some psychologists claimed that I had autism spectrum disorder (ASD), even though
          I have no clue what it was. It is true that I had difficulties in applying for a place in kindergarten since
          I refused to answer any questions during interviews. I did get a place in a christian kindergarten at the very end 
          and received a speech therapy after mother's countless prayers. It is also true that I had difficulties in making 
          friends in primary school, but that's another story...
        </p>
        <p> I was interested in math since young, as you might have expected... (According to admission tutors, every math 
          undergraduate had been interested in math since young, so it's not a good idea to include this <i>"universal" </i> 
          statement in formal research statements... :/ ) ...but it wouldn't be until my first year of secondary school (Grade 7)
          when I was challenged to some "advanced" math questions set by my friends (I think it's something related to quadratic
          formula but I am not sure...) We had since explore some harder math (i.e. Calculus, since it is the main topic in the 
          classic book <i> Advanced Engineering Mathematics</i> by E. Kreyszig). 
        </p>
        <p> I was then invited to participate some enrichment programs in math and physics. I did some proper math (mainly Calculus...) 
          and received good grades. Because of that, my teacher suggested me to take A-Level exams. I had finished A-Level with the 
          unlimited support from teachers, family and friends. I had finally attended Imperial College London in 2018.
        </p>
        <p> It was quite a challenge for me as a 16-year-old boy to adapt university lives - I could not have a complete 
          university experience since I could not join parties in clubs and become a committee of society until I turn 18. 
          To make things worst, I have made some serious mistakes which had nearly ruined my friendships. I am grateful 
          that my tutors, families and friends had guided me through my first two years of math by offering helps and advice 
          in every aspect of my life (this include math and social skills, of course), and I was finally offered a place of 
          exchange at Massachusetts Institute of Technology (MIT) this year.
        </p>
        <h2> What's the point of me telling all these stuff to you? </h2>
        <p> Firstly, I would like to thank the people who had been my coaches/partners from time to time. But most importantly, 
          I would like to introduce you to the God I believe. He is the one who had offered me unconditional and endless love. 
          I truely believe that the supports from my coaches/partners were blessings from God, and therefore nothing would be 
          possible with Him. I hope my story would make God sounds more interesting for you.  
        </p>
        <p> My story doesn't end here, apparently. I am still battling with not just math, but also my arrogance and laziness 
          (probably a result of my ASD). Let's see where would God take me to.
        </p>
      </div>
      </div>
    );
  }
}

export default Mystory;
