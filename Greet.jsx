import React from 'react';
let curr = new Date()
curr = curr.getHours();
var greet = "";
let col={};
if ((curr < 12) && (curr > 1)) {
    greet = "Good Morning";
    col.color="#1991FE"
    // col.background="https://www.pixelstalk.net/wp-content/uploads/2016/07/Sunrise-Image-Download-Free.jpg";
}
else if ((curr >= 12) && (curr < 16)) {
    greet = "Good AfterNoon";
    col.color="#AA91FE";
    // col.background="https://i1.wp.com/godofindia.com/wp-content/uploads/2017/09/gud-evening.jpg";
}
else if ((curr >= 16) && (curr < 18)) {
    greet = "Good Evening";
    // col.background="https://images7.alphacoders.com/424/424146.jpg";
    col.color="#DED0FF";
}
else {
    greet = "Good Night";
    // col.background="https://www.refinery29.com/images/9367380.jpg?crop=40:21";
    col.color="#19DFFE"
}
function Greet()
{
    return <span style={col}>{" " +greet}</span>;
}

export default Greet;