import React,{ createContext, useContext,useState } from 'react'

const TeamContext = createContext(null)

export const ContextProviderTeam = ({ children }) => {


    const [teamActive,setTeamActive] = useState(null)
    
    function handleTeamActive(item){
        setTeamActive(item)
    }

    return (
        <TeamContext.Provider value={{teamActive,handleTeamActive}}>
            {children}
        </TeamContext.Provider>
    )
}

export default TeamContext