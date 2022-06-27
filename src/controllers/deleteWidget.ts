import EDITOR from "../models/editor"
import USER from "../models/user"
import WIDGET from "../models/widget"

export const deleteWidget = async (req: any, res: any) => {
    try {
        if(!req.body.widgetId)
        {
            res.send("no widget id sent")
            return
        }
        const {widgetId} = req.body
        const result = await WIDGET.deleteWidget(widgetId)
        if(result)
        {
            res.send(result)
            return
        }
        else{
            res.send("no result returned")
            return
        }

    } catch (error) {
        res.send(error)
        return
    }
}