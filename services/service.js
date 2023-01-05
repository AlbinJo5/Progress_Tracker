import API_ENDPOINTS from './endpoints'

class SERVICE {
  static async get(path){
        const response = await fetch(path)
        const data = await response.json()
        return data
    }

    static getProjectAPi = async () => {
        const response = await fetch(API_ENDPOINTS.projects)
        const data = await response.json()
        return data
    }
    
}

export default SERVICE;