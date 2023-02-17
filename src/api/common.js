import axios from 'axios'

export const getWeatherInfo = (cityName) => axios.get(`/iot/mapp/ip/query/weather/queryWeatherInfo?cityName=${cityName}`)

export const getAllParkInfo = (id = 't16740989277799xw0olpg') => axios.get(`/iot/mapp/ip/api/parkInfo/findDTOByGid?gid=${id}`)

export const getAllCompInfo = (id = '-1') => axios.get(`/iot/mapp/ip/api/compInfo/findListByTenantId?tenantId=${id}`)

export const getEnergyFlowDiagram = (type) => axios.get(`/mock/iot/digitaltwin/intelligentDevice/getEnergyFlowDiagram?type=${type}`)
