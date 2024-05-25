import { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io"
import { IoMdArrowDropdown } from "react-icons/io";

const Reply = ({ author, text, replies }) => {
    const [show, setShow] = useState(false)
    const changeHandler = () => {
        setShow(!show)
    }
    return (
        <>
            <div className="flex select-none">
                <span onClick={() => changeHandler()} className="text-2xl hover:cursor-pointer">
                    {show ? <IoMdArrowDropdown /> : <IoMdArrowDropright />}
                </span>
                <img width={30} height={30} src={author?.avatar} />
                <span className="ml-4 mt-1">{author?.name}</span>
            </div>
            <div className={`${show ? "border-l-2" : ""} ml-4 `}>
                <div className="pl-12">
                    {text}
                    <div>
                        {
                            show && replies?.map((each) => (
                                <Reply author={each?.author} text={each?.text} replies={each?.replies} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reply