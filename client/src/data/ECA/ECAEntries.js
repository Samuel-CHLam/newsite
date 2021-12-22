import React, { Component } from "react";

import "../../utilities.css"

import bike from "../../img/logo/ECA/bike.png";
import dramSoc from "../../img/logo/ECA/dramsoc.png";
import gabor from "../../img/logo/ECA/gabor.png";
import icPass from "../../img/logo/ECA/icpass.png";
import mcrr from "../../img/logo/ECA/mcrr.png";
import piano from "../../img/logo/ECA/piano.png";
import webLab from "../../img/logo/ECA/web_lab.png";

const Year23 = [
    {
        key: "webLab",
        image: webLab,
        title: "Web Development @ web.lab",
        titledes: "",
        titleright: "Year 3",
        content: (<p className="u-nomargin"> 
            I have finally learnt how to build a webpage in <a href="https://weblab.mit.edu/">MIT web.lab</a>.
            We have progressed from a simple HTML webpage to a webpage with all the elements in a typical MERN 
            stack. <a href="https://eventinder.herokuapp.com/">Here</a> is the webpage I have built with my team, 
            which doesn't have much CSS styling. A better-looking website would be the one you are looking at now, 
            even though it is not built in full MERN stack.
            </p>),
        remark: "This is a course in the MIT's Independent Activities Program (IAP)."
    },
    {
        key: "music",
        // image: piano,
        title: "Music",
        titledes: "Piano, Music Arrangement, Sound Design",
        titleright: "Year 3",
        content: (<p className="u-nomargin"> 
            I am currently a pianist in MIT Musical Theatre Guilds. I am also taking 21M.301 Harmony and Counterpoints I in the
            MIT music department.
            </p>),
        remark: "MIT actually sends me a keyboard!"
    },
    {
        key: "cycle",
        // image: bike,
        title: "Cycling",
        titledes: "",
        titleright: "Year 2-3",
        content: (<p className="u-nomargin"> 
            The only exercise I have been doing during the lockdown period is cycling 
            (I didn't learnt how to cycle until 2020 January!).
            </p>),
        remark: ""
    },
    {
        key: "minecraft",
        image: mcrr,
        title: "Minecraft Railroad (MCRR) Server",
        titledes: "Senior Adminstrator, Architect",
        titleright: "Year 1-3",
        content: (<p className="u-nomargin"> 
            I am a senior admin of my minecraft server. Together with two other friends we have built railway stations 
            and buildings. We have developed and implemented a mod which allow players to travel to/from servers. <b>Official wikipage to be 
            developed -- stay tuned!</b>
            </p>),
        remark: ""
    },
    {
        key: "Trainspotting",
        // image: "",
        title: "Train Spotting",
        titledes: "",
        titleright: "Year 2-3",
        content: (<p className="u-nomargin"> 
            As you might have expected, I travel around London (via trains, of course) in my spare time and take some good photos of trains. 
            Well this is not possible for now due to COVID...
            </p>),
        remark: "My favourite railway classes are Stadler’s FLIRT (Class 745) and Hitachi’s AT300 (Class 800)."
    },
]

const Year1 = [
    {
        key: "ICPASS",
        image: icPass,
        title: "Imperial College Public Awareness and Social Service (ICPASS) Society",
        titledes: "Subcommittee",
        titleright: "Year 1",
        content: (<> 
            <p className="u-nomargin"> I was responsible in the following events: </p>
            <ul className="u-nomargin">
                <li> <b>Famine 24:</b> Participants were required to experience the life of people in third-world countries by 
                starving for 24 hours and engage in specially-designed activities. We were responsible in designing activities related
                to conservation. </li>
                <li> <b>Oxford Model Legislative Council (OMLC):</b> We were responsible to draft and put forward a "model bill" related to 
                national security matters to the Model Legislative Council (Hong Kong equivalent to parliament/congress) for debate. </li>
                <li> I am also a member of <b>Publication Team</b>. We have 
                published <a href="https://issuu.com/icpass/docs/passtimes_xmas_-_short__1__copy">PASSTIMES</a>, a 
                bi-annual (?) magazine on ICPASS event highlights and proses. I had written a note on maximum likelihood 
                estimation, but it is quite informal and might be erroneous...</li>
                </ul>
            </>),
        remark: ""
    },
    {
        key: "DramSoc",
        image: dramSoc,
        title: "Imperial College Dramatic Society",
        titledes: "Staff",
        titleright: "Year 1",
        content: (<> 
            <p className="u-nomargin"> I participated in various performances in the Imperial Dramatic Society (DramSoc): </p>
            <ul className="u-nomargin">
                <li> <b> 2019 Spring: Legally Blonde (with ICU Musical Theatre Society): </b> As Sound Designer. </li>
                <li> <b> 2018 Autumn: And Then There Were None: </b> As Deputy Stage Manager. </li>
                <li> I also supported various productions in 2019 Spring Show, a series of shows by cultural societies. </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Gabor",
        image: gabor,
        title: "Gabor Hall",
        titledes: "Hall Committee Member (Floor Representative)",
        titleright: "Year 1",
        content: (<> 
            <p> I propsed hall-wide events and reported any issues on the floor I am living.</p>
            </>),
        remark: ""
    }
]

export {Year23, Year1}