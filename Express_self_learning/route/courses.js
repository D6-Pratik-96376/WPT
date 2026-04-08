const express = require('express')


const route =express.Router() 

const pool = require('../db/pool')
const createresult = require('../utils/result')

route.post('/', async(req,res) =>{
    const {course_name,Fees} = req.body
    const sql = `INSERT INTO courses(course_name,Fees) VALUES(?,?)`
    try{
        const data = await pool.query(sql,[course_name,Fees])
        res.send(createresult(data[0],null))

    }catch(error){
        res.send(createresult(null,error))
    }


})

route.get('/', async(req,res) => {
    const sql = `SELECT * FROM courses`
    try{
        const data = await pool.query(sql)
        res.send(createresult(data[0],null))
    }catch(error){
        res.send(createresult(null,data))
    }
})

route.put('/',async(req,res) => {

    const {course_name,Fees,cid} = req.body
    const sql = `UPDATE courses SET course_name = ? , Fees = ? WHERE cid = ?`
     
    try{
        const data = await pool.query(sql,[course_name,Fees,cid])
        res.send(createresult(data[0], null))

    }catch(error){
        res.send(createresult(null,error))
    }
    
})

route.delete('/:cid', async (req,res) => {
    const cid = req.params.cid
    const sql = `DELETE FROM courses WHERE cid =?`
    // console.log(cid)
    try {
        const data = await pool.query(sql,[cid])
        
        res.send(createresult(data,null))
        
    } catch (error) {
        res.send(createresult(null,error))
    }
})

module.exports = route