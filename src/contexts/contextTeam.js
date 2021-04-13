import React,{ createContext, useContext,useState } from 'react'

const TeamContext = createContext(null)

export const ContextProviderTeam = ({ children }) => {


    const [teamActive,setTeamActive] = useState(null)
  

    return (
        <TeamContext.Provider value={{teamActive,setTeamActive}}>
            {children}
        </TeamContext.Provider>
    )
}

export default TeamContext