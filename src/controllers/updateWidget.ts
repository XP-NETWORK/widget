import WIDGET from "../models/widget"

export const updateWidget = async (req: any, res: any) => {
    try {
        if (!req.body.widget || !req.body.widgetId) {
            res.send("no widget object/widgetId were sent")
            return
        }

        const { widget, widgetId } = req.body
        WIDGET.updateWidget(widget, widgetId).then((updatedWidget: object) => {
            if (updatedWidget) {
                res.send({"res" : updatedWidget})
                return
            }
            else {
                res.send("a problem occured")
                return
            }
        })
    } catch (error) {
        res.send(error)
    }
}