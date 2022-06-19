import WIDGET from '../models/widget'

export const getWidget = async (req: any, res: any) => {
    try {
        
        if(!req.query.widgetName||!req.query.userName){
            res.send("widget or user name were not sent")
            return
        }

        const {widgetName, userName} = req.query
        const result = await WIDGET.getWidget(userName,widgetName)

        if(result)
        {
            res.send(result)
            return
        }
        else{
            res.send("no such widget found")
            return
        }

    } catch (error) {
        res.send(error)
        return
    }
}