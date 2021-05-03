import React from "react";

export const Colors = ({match : {params}}) => {

return <div style= {{ background: `#${params.colorCode}`}}>Colors</div>;

}