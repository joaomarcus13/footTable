import React,{ createContext, useContext,useState } from 'react'

const LeagueContext = createContext(null)


export const ContextProviderLeague = ({ children }) => {

    const [leagueActive,setLeagueActive] = useState(null)
    const [teamActive,setTeamActive] = useState(null)
    const [table,setTable] = useState([])
    const [currentMatchday,setCurrentMatchday] = useState(1)
    const [darkMode,setDarkMode] = useState(true)

    return (
        <LeagueContext.Provider value={{leagueActive,setLeagueActive,teamActive,setTeamActive,currentMatchday,setCurrentMatchday,table,setTable,darkMode,setDarkMode}}>
            {children}
        </LeagueContext.Provider>
    )
}

export default LeagueContext