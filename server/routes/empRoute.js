import express from "express";
import { createEmp,
         getByIdEmp, 
         getAllEmp, 
         updateEmp,
         deleteEmp
} from "../controllers/empController.js";

const router = express.Router();

router.post("/createEmp", createEmp);
router.get("/getAllEmp", getAllEmp);
router.get("/getByIdEmp/:id", getByIdEmp);
router.put("/updateEmp/:id", updateEmp);
router.delete("/deleteEmp/:id", deleteEmp);

//EXPORT EMP
const empRoutes = router;
export default empRoutes;