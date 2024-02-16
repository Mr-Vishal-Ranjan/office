import React, { createContext , useContext , useState} from 'react'

const UseContext = () => {
    const VContext=createContext();

    function Component1(){
        const [user,setUser] = useState("Vishal");

        return(
            <VContext.Provider value={user}>
                <h1>{`Hello ${user}!`}</h1>
                <Component2/>
            </VContext.Provider>
        );
    }

    function Component2(){
        const user = useContext(VContext);

        return(
            <div>
            <h1>Component2</h1>
            <h1>{`Hello this is compnent2 ${user}!`}</h1>
            </div>
        );
    }
  return (
    <div>
        <Component1/>
    </div>
  )
}

export default UseContext