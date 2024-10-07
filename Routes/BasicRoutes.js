const express = require("express");
const router = express.Router();
router.use(express.json());
router.use (express.urlencoded({extended:true}));
const dbArray = [
    
        {
          "id": 1,
          "name": "Amrita Institute of Medical Sciences",
          "patientCount": 200,
          "location": "Ponekkara"
        },
        {
          "id": 2,
          "name": "Medical Trust Hospital",
          "patientCount": 150,
          "location": "MG Road"
        },
        {
          "id": 3,
          "name": "Aster Medcity",
          "patientCount": 300,
          "location": "Cheranallur"
        },
        {
          "id": 4,
          "name": "Lakeshore Hospital",
          "patientCount": 180,
          "location": "Nettoor"
        },
        {
          "id": 5,
          "name": "Rajagiri Hospital",
          "patientCount": 250,
          "location": "Aluva"
        },
        {
          "id": 6,
          "name": "Sunrise Hospital",
          "patientCount": 160,
          "location": "Kakkanad"
        },
        {
          "id": 7,
          "name": "VPS Lakeshore Hospital",
          "patientCount": 220,
          "location": "Maradu"
        },
        {
          "id": 8,
          "name": "KIMS Hospital",
          "patientCount": 140,
          "location": "Vyttila"
        },
        {
          "id": 9,
          "name": "PVS Memorial Hospital",
          "patientCount": 110,
          "location": "Kaloor"
        },
        {
          "id": 10,
          "name": "Renai Medicity Hospital",
          "patientCount": 190,
          "location": "Palarivattom"
        },
        {
          "id": 11,
          "name": "Ernakulam Medical Centre",
          "patientCount": 130,
          "location": "Vennala"
        },
        {
          "id": 12,
          "name": "Speciality Hospital",
          "patientCount": 170,
          "location": "MG Road"
        },
        {
          "id": 13,
          "name": "Indira Gandhi Co-operative Hospital",
          "patientCount": 210,
          "location": "Gandhi Nagar"
        },
        {
          "id": 14,
          "name": "Sree Sudheendra Medical Mission",
          "patientCount": 100,
          "location": "Chittoor"
        },
        {
          "id": 15,
          "name": "City Hospital",
          "patientCount": 120,
          "location": "Edappally"
        },
        {
          "id": 16,
          "name": "M.O.S.C Medical College Hospital",
          "patientCount": 240,
          "location": "Kolenchery"
        },
        {
          "id": 17,
          "name": "Cochin Hospital",
          "patientCount": 90,
          "location": "Fort Kochi"
        },
        {
          "id": 18,
          "name": "Global Hospital",
          "patientCount": 180,
          "location": "Kadavanthra"
        },
        {
          "id": 19,
          "name": "Sahyadri Hospital",
          "patientCount": 150,
          "location": "Kalady"
        },
        {
          "id": 20,
          "name": "Seaport Hospital",
          "patientCount": 130,
          "location": "Thrikkakara"
        }
      ];
      router.get("/getData",(req,res)=>{
        res.send(dbArray);
      });

      router.post('/addData',(req,res)=>{
        console.log(req.body)
        dbArray.push(req.body)
        res.send("data added")
      
      });

      router.put('/edit',(req,res)=>{
        dbArray.splice(1,1,req.body);
        res.send("Updated Successfully the first one");
      });

      router.delete("/remove",(req,res)=>{
        dbArray.pop();
        res.send("deleted successfully");

      });
      




      module.exports = router;
