const express = require('express')
const Task = require('../models/task')
const router = new express.Router()

router.post('/tasks', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/tasks', async (req, res) => {

    try {
        const tasks = await Task.find({})
        res.status(200).send(tasks)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/task/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const task = await Task.findById({ _id })
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/task/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description', 'isDone']
    const isValidUpdate = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidUpdate) {
        res.status(400).send({ error: 'invalid update' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        })

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/task/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)

        if (!task) {
            res.status(404).send()
        }

        res.send(task)
    } catch (e) {
        res.status(400).send()
    }
})

module.exports = router
