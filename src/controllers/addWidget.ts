import EDITOR from "../models/editor"
import USER from "../models/user"
import WIDGET from "../models/widget"

//a function that receives a widget object (with the name of the widget and the editor inside already)
//and adds it to the DB
export const addWidget = async (req: any, res: any) => {
    
    try {
        if (!req.body.widget||!req.body.signature||!req.body.address) {
            res.send("no widget object/signature/address were sent")
            return
        }

        const {widget,signature,address} = req.body
        const _user = await USER.addUser(signature,address)
        const _widget = await WIDGET.addWidget(widget)
        await EDITOR.addEditor(_user._id,_widget._id)

        if (_widget) {
            res.send(_widget)
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