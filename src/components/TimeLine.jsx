import React from "react";
import {TimeLineBox} from "../styles/PortfolioComponents";

const TimeLine = ({from, to}) => (<TimeLineBox>{from} - {to}</TimeLineBox>)

export default TimeLine;