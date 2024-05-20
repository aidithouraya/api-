



const sendMessage  = (req, res) => {
    const newMessage = req.body;
   // messages.push(newMessage);
    res.status(201).json(newMessage);
}

module.exports={sendMessage}