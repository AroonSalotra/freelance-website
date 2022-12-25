import React, { useEffect, useState } from "react";


const Quote = () => {
    const [total, setTotal] = useState<number>(0)
    // const [websiteOption, setWebsiteOption] = useState<undefined | string>()
    const [sitePrice, setSitePrice] = useState<number>(0)
    const [stylePrice, setStylePrice] = useState<number>(0)
    const [showModal, setShowModal] = useState<boolean>(false)

    // useEffect(() => {
    //     setTotal(current => current + sitePrice)
    // }, [sitePrice])


    const handleChange = (
        event: React.FormEvent<HTMLInputElement>,
        param: React.Dispatch<React.SetStateAction<number>>
    ) => {
        const { value } = event.target as HTMLInputElement
        param(JSON.parse(value))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (sitePrice !== 0 && stylePrice !== 0) {
            setShowModal(current => !current)
        }
    }




    return (
        <div>
            <h1 className="text-3xl">Get a quote</h1>
            <form className="flex flex-col gap-4"
                action="" onSubmit={handleSubmit} >
                <fieldset>

                    <legend>Website Type</legend>

                    <input
                        type="radio"
                        name="type"
                        id="commerce"
                        value={40}
                        onChange={(e) => handleChange(e, setStylePrice)} />

                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="commerce">E-Commerce</label>

                    <input
                        type="radio"
                        name="type"
                        id="resource"
                        value={20}
                        onChange={(e) => handleChange(e, setStylePrice)} />


                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="resource">Resource</label>

                    <input
                        type="radio"
                        name="type"
                        id="game"
                        value={30}
                        onChange={(e) => handleChange(e, setStylePrice)} />


                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="game">Online Game</label>


                </fieldset>

                <fieldset>

                    <legend>Base Style</legend>

                    <input
                        type="radio"
                        name="style"
                        id="modern"
                        value={15}
                        onChange={(e) => handleChange(e, setSitePrice)} />

                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="modern">Modern</label>

                    <input
                        type="radio"
                        name="style"
                        id="classic"
                        value={10}
                        onChange={(e) => handleChange(e, setSitePrice)} />

                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="classic">Classic</label>

                    <input
                        type="radio"
                        name="style"
                        id="abstract"
                        value={10}
                        onChange={(e) => handleChange(e, setSitePrice)} />

                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="abstract">Abstract</label>

                </fieldset>

                <fieldset className="flex flex-col py-4">

                    {/* <div class="grid grid-rows-[200px_minmax(900px,_1fr)_100px]"> */}

                    <legend>Optional Extras</legend>

                    <label htmlFor="animations">Animations
                        <input type="checkbox" name="" id="animations" />
                    </label>

                    <label htmlFor="responsivity">Mobile Responsivity
                        <input type="checkbox" name="" id="responsivity" />
                    </label>

                    <label htmlFor="adsense">Google Adsense
                        <input type="checkbox" name="" id="adsense" />
                    </label>

                    <label htmlFor="socialmedia">Social Media Post
                        <input type="checkbox" name="" id="socialmedia" />
                    </label>
                </fieldset>

                <button>Send Request</button>

            </form>

            <div id="modal"
                className={`bg-slate-100 w-fit absolute p-8 border-t-[1rem] border-blue-500 
                top-[12%] left-[50%] translate-x-[-8rem] ${showModal ? "modal-show" : "modal-hide"}`}>

                <h1>Your request has been sent!</h1>

                <button className="bg-blue-500 px-2 py-1 rounded-lg mt-8"
                    onClick={() => setShowModal(!showModal)}>
                    Continue</button>
            </div>



            <h3 className="border-t-2 border-black w-fit mx-auto bg-slate-100 p-2 rounded-lg">
                Est. Price:
                <span className="text-4xl p-4 pointer-events-none">
                    £{sitePrice + stylePrice}</span>
            </h3>

            <p className="text-sm text-center mx-auto text-slate-500 pt-4 italic">
                One time purchase does not come with scheduled website maintenence and upgrade availablity, if you would like scheduled updating - please use a monthly plan instead.
            </p>

            {/* <h2>{sitePrice + stylePrice}</h2> */}
            {/* <h2 className="capitalize">{websiteOption}</h2> */}
        </div>
    );
}

export default Quote;