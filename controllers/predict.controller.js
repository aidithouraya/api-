const { spawn }  = require('child_process');

const getPredict = (req, res) => {
    const pythonProcess = spawn('python', ['./fast_api/main.py']);

    pythonProcess.stdout.on('data', (data) => {
        const predictions = JSON.parse(data.toString());
        res.json(predictions);
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    pythonProcess.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
    });
}

module.exports= {getPredict}