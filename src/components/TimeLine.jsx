import React from "react";
import {TimeLineBox} from "../styles/PortfolioComponents";

const TimeLine = ({from, to}) => (<TimeLineBox><p>{from} - {to}</p></TimeLineBox>)

export default TimeLine;