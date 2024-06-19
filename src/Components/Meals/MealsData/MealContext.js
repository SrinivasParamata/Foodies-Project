'use client';

const { createContext, useState } = require("react");

export  const CreateContext = createContext(null);

const Context=({children})=>{

    const [Meals,SetMeals] =useState([]);

    function MealsUpdate(data){
        SetMeals(data)
    }

    const ContextVal={
        Meals,
        MealsUpdate,

    }

    return(
        <>
        <CreateContext.Provider value={ContextVal} >
            {children}
        </CreateContext.Provider>  
        </>
    )
}

export default Context;

