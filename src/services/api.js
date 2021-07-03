import axios from 'axios'

const api = axios.create({
    baseURL: 'http://api.football-data.org/v2/',
    headers: { 'X-Auth-Token': '29302314f82f407cb9b903f87619a2a7' }
});




export default {

    getCurrentMatchday: async (id) =>{
        try {
            const resp = await api.get(`/competitions/${id}`)
            return resp.data.currentSeason.currentMatchday
        } catch (error) {
            console.log(error)
            return null
        }
    },

    getStandings: async (id) => {
        try {
            const league = await api.get(`/competitions/${id}/standings`)
            return {
                table: league.data.standings[0].table,
                currentMatchday: league.data.season.currentMatchday
            }

        } catch (error) {
            console.log('erro table:::', error)
            return null
        }
    },

    getMatches: async (id, currentMatchday) => {
        try {
            const matches = await api.get(`/competitions/${id}/matches`)
            return {
                allMatches: matches.data.matches,
                match: matches.data.matches.filter(e => e.matchday == currentMatchday)
            }
        } catch (error) {
            console.log('erro matches:::', error)
            return null
        }
    },

    getScorers: async (id) => {
        try {
            let scorers = await api.get(`/competitions/${id}/scorers/`)
            return scorers.data.scorers
            setScorers(scorers.data.scorers)
            storeData(scorers.data.scorers)
        } catch (error) {
            console.log('erro scorers::', error)
            return null
            getData()
        }
    },

    getSquad: async (id) => {
        try {
            let squad = await api.get(`/teams/${id}`)

            return squad.data.squad
            //setSquad(squad.data.squad)

            //setSpinner(false)
            //setMatcheActive(mts)
            //storeData(mtchs)

        } catch (error) {
            console.log('erro matches:::', error)
            return null
            //getData()
        }
    }



}