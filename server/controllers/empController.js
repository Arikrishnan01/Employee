import empSchema from '../models/empModel.js';


/**EMP CRUD OPERATION */
/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: POST
 * PATH: /createEmp 
 */

export const createEmp = async(req, res) => {
    try{
        const {empId, empName, empSelary, empRole} = req.body;

        const newEmp = new empSchema({
            empId,
            empName,
            empSelary,
            empRole
        })
        await newEmp.save()
            return res.status(200).json({
                message: "Data created Succsessfully",
                data: newEmp
            });
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /getAllEmp 
 */

export const getAllEmp = async(req, res) => {
    try{
        const getAllData = await empSchema.find();
        if(getAllData){
            return res.status(200).json({
                message: "Data fetched successfully",
                data: getAllData
            });
        }
        else{
            return res.status(200).json({
                message: "Couldn't fetch the data",
                data: getAllData
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: GET
 * PATH: /geByIdEmp 
 */
export const getByIdEmp = async(req, res) => {
    try{
        const {id} = req.params;
        const getById = await empSchema.findById(id);
        if(getById){
            return res.status(200).json({
                message: "Atlas data fetched successfully",
                data: getById
            });
        }
        else{
            return res.status(400).json({
                message: "Atlas, Couldn't find the data!!!"
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!"
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: PUT
 * PATH: /geByIdEmp 
 */

export const updateEmp = async(req, res) => {
    try{
        const {id} = req.params;
        const updateByIdEmp = await empSchema.findByIdAndUpdate(id,req.body,{new : true});
        if(updateByIdEmp){
            return res.status(200).json({
                message: "Atlas, data updated successfully",
                data: updateByIdEmp 
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't find the data",
                data: updateByIdEmp
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!!",
            error: error.message
        });
    }
}

/**
 * REQ: INPUT
 * RES: OUTPUT
 * METHOD: DELETE
 * PATH: /deleteEmp 
 */

export const deleteEmp = async(req, res) => {
    try{
        const {id} = req.params;
        const deleteByIdEmp = await empSchema.findByIdAndDelete(id);
        if(deleteByIdEmp){
            return res.status(200).json({
                message: "Atlas, Data deleted successfully!!",
                data: deleteByIdEmp
            });
        }
        else{
            return res.status(404).json({
                message: "Atlas, couldn't find the data!!!",
                data: deleteByIdEmp
            });
        }
    }
    catch(error){
        return res.status(500).json({
            message: "Internal server Error!!",
            error: error.message
        });
    }
}