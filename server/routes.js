const
    express = require('express'),
    router = express.Router(),
    fs = require('fs'),
    path = require('path')



module.exports = () => {

    // localhost:8080/getProjectImgs
    router.get('/getProjectImgs', (req, res) => {

        //changes \\ in directory to /
        const flatten = arr => arr.reduce((acc, val) =>
        acc.concat(Array.isArray(val) ? flatten(val) : val), [])
    
    Array.prototype.flatten = function () {
        return flatten(this)
    }
    
    const walkSync = dir => fs.readdirSync(dir)
        .map(file => fs.statSync(path.join(dir, file)).isDirectory() ?
            walkSync(path.join('../images/projects', file)) :
            path.join('../images/projects', file).replace(/\\/g, '/')).flatten()
    
    imgFldrPath = path.join(__dirname, '..', '/client/images/projects')
    
        //this sends back the filepath names of the files in the image folder
        res.send(walkSync(imgFldrPath, []))
    })

    //this returns the actual info in the router and saves it in the export function 
    return router
}