import { useState } from "react";


function ToggleChange(intVal) {
   const [ change , setChange ] = useState(intVal);
   const [loader , setLoader] = useState(true);

   function changeMe() {
    setChange(!change);
   }

   function changeLoader () {
      setLoader(!loader);
   }

   return [ change , changeMe , loader , changeLoader ];
}

export default ToggleChange;