import userModel from "../models/user/user.model.js"

export const verify = async (req, res) => {
    try { 
        const { email } = req.body;
        console.log('haw l user', email)
        const theuser = await userModel.findOne({email: email});
        if (!theuser) {
            return res.status(404).json({message: "user not found"});
        }
        res.status(200).json({message: "user found"});
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Internal server error"});
    }
}
