import WIDGET from "../models/widget"

//a function that receives a widget object (with the name of the widget and the editor inside already)
//and adds it to the DB
export const addWidget = async (req: any, res: any) => {
    try {
        if (!req.body.widget) {
            res.send("no widget object was sent")
            return
        }

        const {widget} = req.body
       
        const result = await WIDGET.addWidget(widget)

        if (result) {
            res.send(result)
            return
        }
        else {
            res.send("a problem occured")
            return
        }
    } catch (error) {
        res.send(error)
    }
}