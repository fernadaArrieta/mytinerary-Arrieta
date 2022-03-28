const Tinerary = require("../models/itinerarios");

const commentsControllers = {

    addComment: async (req, res) => {
        const {itinerario,comment} = req.body.comment
        const user = req.user._id
        try {
            const nuevoComment = await Tinerary.findOneAndUpdate({_id:itinerario}, {$push: {comments: {comment: comment, userID: user}}}, {new: true}).populate("comments.userID", {username:1})
            res.json({ success: true, response:{nuevoComment}, message:"Thanks you for let us your comment" })

        }
        catch (error) {
            console.log(error)
            res.json({ success: false, message: "Something went wrong try again in a few minutes" })
        }

    },
    modifiComment: async (req, res) => {
        const {commentID,comment} = req.body.comment
        const user = req.user._id
        try {
            const newComment = await Tinerary.findOneAndUpdate({"comments._id":commentID}, {$set: {"comments.$.comment": comment}}, {new: true})
            console.log(newComment)
            res.json({ success: true, response:{newComment}, message:"your comment has been modified" })

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