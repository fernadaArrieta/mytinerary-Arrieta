const Tinerary = require("../models/itinerarios");

const commentsControllers = {

    addComment: async (req, res) => {
        //console.log('REQ.BODY')
        //console.log(req.body)
        //console.log('REQ.USER')
        //console.log(req.user)
        const {itinerario,comments} = req.body
        const user = req.user._id
        try {
            const newComment = await Tinerary.findOneAndUpdate({_id:itinerario}, {$push: {comments: {comment: comments.comment, userId: user}}}, {new: true})
            .populate("comments.userId", {firstName:1,profilePicture:1,LastName:1})
            res.json({ success: true, response:{newComment}, message:"Thanks you for let us your comment" })

        }
        catch (error) { 
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }

    },
    modifyComment: async (req, res) => {
        const { comments } = req.body
        const commentId= req.params.id
        const user = req.user._id
        try {
            const modifyComment = await Tinerary
            .findOneAndUpdate({"comments._id":commentId}, {$set: {"comments.$.comment": comments.comment}}, {new: true})
            
            res.json({ success: true, response:{modifyComment}, message:"your comment has been modified" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: true, message: "Something went wrong try again in a few minutes" })
        }

    },
           
      
    deleteComment: async (req, res) => {
        const id = req.params.id
        const user = req.user._id
        try {
            const deleteComment = await Tinerary.findOneAndUpdate({"comments._id":id}, {$pull: {comments: {_id: id}}}, {new: true})
          console.log(deleteComment)
            res.json({ success: true, response:{deleteComment}, message: "you have deleted the commento" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }

    },
    
}
module.exports = commentsControllers