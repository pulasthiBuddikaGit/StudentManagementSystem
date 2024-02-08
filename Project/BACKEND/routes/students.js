const router = require("express").Router();
let Student = require("../models/Student");

//create
//Arrow function ()=>{}
router.route("/add").post((req,res)=>{
    //taking the values from frontend
    const name = req.body.name;
    //taken age request need to in Number format
    const age = Number(req.body.age);
    const gender = req.body.gender

    //creating new object 1st method
    const newStudent = new Student({
        name,
        age,
        gender

    }) 

    //Arrow function ()=>{}
    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch((err)=>{
        console.log(err);
    })
})

//read
//display all students
router.route("/").get((req,res)=>{
    //found result pass to students parameter
    Student.find().then((students)=>{
        //parameter displayed
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
router.route("/update/:id").put(async(req,res) => {
    let userId = req.params.id;

    //below details comes from front end
    //D structure
    const{name,age,gender} = req.body;

    //creating new object 2nd method
    const updateStudent = {
        name,
        age,
        gender
    }

    const update = await Student.findByIdAndUpdate(userId,updateStudent).then(() => {
        res.status(200).send({status:"User updated"})
    }).catch((err) =>{
        console.log(err)
        res.status(500).send({status:"Error with updating data", error: err.message});
    })

})


//delete
router.route("/delete/:id").delete(async(req,res) =>{
    let userId= req.params.id;

    await Student.findByIdAndDelete(userId).then(() =>{
        res.status(200).send({status:"User deleted"});
    }).catch((err) => {
        console.log(err.message)
        res.status(500).send({status:"Error with delete user",error: err.message});
    })
})


//take only one student data
router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;

    const user = await Student.findById(userId).then((result) => {
        res.status(200).send({status:"User Fetched", result:result})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status:"Error with get user", error :err.message});
    })

})


module.exports = router;
