import EDITOR from "../models/editor"
import USER from "../models/user"
import WIDGET from "../models/widget"

export const addEditor = async (req: any,res:any )=>{{
    try {
        
        
        if(!req.body.widgetId || !req.body.userId)
        {
            res.send("widgetId and/or userId missing")
            return
        }
        const {userId,widgetId} = req.query
        const user = await USER.getUserById(userId)

        if(user === -1)
        {
           return "no such user, create one and then create a widget"
        }

        await EDITOR.addEditor(userId,widgetId)
        return

    } catch (error) {
        res.send(error)
        return
    }
}}