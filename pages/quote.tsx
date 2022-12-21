import React, { useState } from "react";


const Quote = () => {
    const [price, setPrice] = useState<number>(0)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <div>
            {/* <h1>This is the new page!</h1> */}

            <form className=""
                action=""
                onSubmit={handleSubmit}>

                {/* <div className="form-question"> */}
                <label className="form-question"
                    htmlFor="qone">
                    Custom Domain
                    <input type="checkbox" name="" id="qone" />
                </label>

                <label className="form-question"
                    htmlFor="qtwo">
                    SSL Certificate
                    <input type="checkbox" name="" id="qtwo" />
                </label>





                {/* </div> */}

                {/* <button>Submit</button> */}
            </form>



            <h2>Estimated Total: {price}</h2>


        </div>
    );
}

export default Quote;