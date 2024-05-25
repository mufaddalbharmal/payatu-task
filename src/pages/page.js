import React from "react"
import Reply from "../components/reply";
import {json} from "../constants/constants"

const Page = () => {
    return (<>
        <div className="p-2 flex flex-col ">
            <Reply author={json?.author} text={json?.text} replies={json?.replies}/>            
        </div>
    </>)
}
export default Page