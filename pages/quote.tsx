import React, { useState } from "react";


const Quote = () => {
    const [price, setPrice] = useState<number>(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            {/* <h1>This is the new page!</h1> */}
            <h1>{price}</h1>

            <form className="flex flex-col"
                action=""
                onSubmit={handleSubmit}>

                <div className="form-question">
                    <label htmlFor="qone">Custom Domain?</label>
                    <input type="checkbox" name="" id="qone" />
                </div>

                {/* <button>Submit</button> */}
            </form>
        </div>
    );
}

export default Quote;