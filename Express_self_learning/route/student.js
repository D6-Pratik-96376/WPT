const express = require('express')
const router = express.Router()

const createresult = require('../utils/result')
const pool = require('../db/pool')




router.post('/', async(req,res)=>{
    const {Name,Marks} = req.body
    const sql = `INSERT INTO students(Name,Marks) VALUES(?,?)`
    try{
        const data = await pool.query(sql,[Name,Marks])
        res.send(createresult(data[0],null))
    }catch(error){
        res.send(createresult(null,error))
    }
})

router.get('/',async(req,res)=>{
    const sql = `SELECT * FROM students`
    try{
        const data = await pool.query(sql)
        res.send(createresult(data[0]))
    }catch(error){
        res.send(createresult(null,error))
    }
})

router.put('/',async(req,res) =>{
    const {Name,Marks,sid} = req.body
    const sql = `UPDATE students SET Name = ? , Marks = ? WHERE sid=? `
    try{
        const data = await pool.query(sql,[Name,Marks,sid])
        res.send(createresult(data[0],null))
    }catch(error){
        res.send(createresult(null,error))
    }
})

router.delete('/:sid', async(req,res)=>{
    //const {Name,Marks} = req.body
    const sid = req.params.sid
    const sql = `DELETE FROM students WHERE sid = ?`
    try{
        const data = await pool.query(sql,[sid])
        res.send(createresult(data[0],null))
    }catch(error){
        res.send(createresult(null,error))
    }
})
module.exports = router