import React, { useState } from "react";


const Quote = () => {
    const [total, setTotal] = useState<number>(0)
    const [websiteOption, setWebsiteOption] = useState<undefined | string>()

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement
        setWebsiteOption(target.value)
    }


    return (
        <div>

            <form action="">
                <fieldset>

                    <legend>Website Type</legend>

                    <input
                        type="radio"
                        name="type"
                        id="commerce"
                        value="commerce"
                        onChange={handleChange}
                    />

                    <label
                        className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="commerce">
                        E-Commerce</label>

                    <input
                        type="radio"
                        name="type"
                        id="resource"
                        value="resource"
                        onChange={handleChange}

                    />

                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="resource">
                        Resource</label>

                    <input
                        type="radio"
                        name="type"
                        id="game"
                        value="game"
                        onChange={handleChange}

                    />

                    <label className="bg-blue-500 p-2 rounded-lg hover:bg-blue-400"
                        htmlFor="game">
                        Online Game</label>



                </fieldset>

            </form>



            <h2>{total}</h2>
            <h2 className="capitalize">{websiteOption}</h2>
        </div>
    );
}

export default Quote;