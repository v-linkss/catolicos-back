// const { ApiService } = require('../services/ApiService')

// class ApiController {
//     constructor() {
//         this.apiService = new ApiService();
//     }

    
//     async createPrediosAmbiente(req, res) {
//         const jsonData = req.body;
//         const object = await this.apiService.create( jsonData, req, res );
//         return res.json(object);
//     }

//     async getAllPrediosAmbiente(req, res) {
//          await this.apiService.getAllPrediosAmbiente(req,res)
//     }

//     async getPrediosAmbienteById(req, res) {
//         const id = req.params.id;
//         await this.apiService.getPrediosAmbienteById(id, req, res)
        
//     }

//     async updatePrediosAmbienteById(req, res) {
//         const id = req.params.id;
//         const jsonData = req.body;
//         await this.apiService.updatePrediosAmbienteById(id,jsonData, req, res)

//     }

//     async deletePrediosAmbienteById(req, res) {
//         const id = req.params.id;
//         const data = req.body
//         await this.apiService.deletePrediosAmbienteById(id, data, req, res)

//     }

//     //PA

//     async getPredioAreas(req, res) {
//         await this.apiService.getPredioAreas(req,res)
//    }

//    //TV

//     async getTabValores(req, res) {
//         await this.apiService.getTabValores(req,res)
//     }

//     async auth(req, res) {
//         const jsonData = req.body;

//         const resultado = await this.apiService.authUser(jsonData)
//         res.status(500).json(resultado);

//     }
// }

// module.exports = {
//     ApiController
//   };
