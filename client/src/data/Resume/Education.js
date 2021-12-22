import React, { Component } from "react";

import "../../utilities.css"

import mitLogo from "../../img/logo/institutes/MIT-logo-red-gray-72x38.svg";
import imperialLogo from "../../img/logo/institutes/IMP_ML_1CS_4CP.png";
import logosLogo from "../../img/logo/institutes/logosAcademy.jpg";

const EducationList = [
    {
        key: "MIT",
        image: mitLogo,
        title: "Massachusetts Institute of Technology",
        titledes: "Exchange Student (Junior/Third Year)",
        titleright: "September 2020 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Concentration: Dynamical Systems, Stochastic Analysis, Statistical Learning </li>
                <li> Fall and IAP Results: GPA 5.0/5.0 </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Imperial",
        image: imperialLogo,
        title: "Imperial College London",
        titledes: "MSci Mathematics with a Year Abroad",
        titleright: "October 2018 - Present",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> Year 1 Results: First honor with Dean's List </li>
                <li> Year 2 Results: First honor with Dean's List </li>
            </ul>
            </>),
        remark: ""
    },
    {
        key: "Logos",
        image: logosLogo,
        title: "The Hong Kong Chinese Christian Churches Union Logos Academy",
        titledes: "Secondary Education (Grade 7-11)* / A Level",
        titleright: "September 2013 - July 2018",
        content: (<> 
            <ul className="u-nomargin"> 
                <li> A Level Results: Modular Mathematics** (A*, A*, A*), Physics (A), Chinese (A*) </li>
                <li> Third of cohort in Grade 9, First of cohort in Grade 10. </li>
            </ul>
            </>),
        remark: "* Grade 12 was skipped. **Modular Mathematics refers to a combination of three subjects: Mathematics, Further Mathematics and Further Mathematics (Additional)."
    }
]

export {mitLogo, imperialLogo, logosLogo, EducationList}