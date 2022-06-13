

//@desc     get a random activity
//@route    GET /api/getActivity
//@acess    Private
const getActivity = async (req, res) => {
    try{
        res.status(200).json({message: "hello"})
    }
    catch(err){
        res.status(400).json({err}) 
    }
}

module.exports = {
    getActivity
}