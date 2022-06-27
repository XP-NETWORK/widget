import EDITOR from "../models/editor";


export const getEditor= async (req: any,res: any)=>{
    try {
        if(!req.query.editorId)
        {
            res.send("editor id not sent")
            return
        }
        const {editorId} = req.query
        const editor = await EDITOR.getEditor(editorId)

        if(editor)
        {
            res.send(editor)
            return
        }
        else{
            res.send("no editor with that id")
            return
        }

    } catch (error) {
        res.send(error)
        return
    }
}