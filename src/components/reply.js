const Reply = ({ author, text, replies }) => {
    return (
        <>
            <div className="flex ">
                <img width={30} height={30} src={author?.avatar} />
                <span className="ml-4 mt-1">{author?.name}</span>
            </div>
            <div className="border-l-2 ml-4">
                <div className="">
                </div>
                <div className="pl-12">
                    {text}
                    {
                        replies && replies?.map((each) => (
                            <Reply author={each?.author} text={each?.text} replies={each?.replies} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Reply