import React, { FC, useState } from "react";
import { IMindyResponse } from "types/MindyType";

type TPrevJsonRender = {
 data: IMindyResponse;
 isMobile: boolean;
};

const PrevJsonRender: FC<TPrevJsonRender> = (props) => {
 const [isVisible, setIsVisible] = useState(!props.isMobile);

 return (
  <div>
   {props.isMobile && (
    <button className='bg-blue-500 rounded-md p-2 text-white' onClick={() => setIsVisible(!isVisible)}>
     {isVisible ? "Ocultar Data" : "Ver Data"}
    </button>
   )}
   {isVisible && <pre>{JSON.stringify(props.data, null, 2)}</pre>}
  </div>
 );
};

export default PrevJsonRender;
