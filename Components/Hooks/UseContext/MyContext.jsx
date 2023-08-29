/* eslint-disable react/prop-types */
// first steps => create context

import { createContext, useState } from "react";

const MyContext = createContext();
// Custom provider for context
// accept the props and return the provider from the context
function Provider(props){
    const [isSubscribe, setIsSubscribe] = useState(false);
    return(
        <MyContext.Provider value={[isSubscribe, setIsSubscribe]}>
            {props.children}
        </MyContext.Provider> 
    )
}

export {Provider}
export default MyContext;