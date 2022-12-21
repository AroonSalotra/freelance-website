import { BsCheckCircleFill } from "react-icons/bs"
import TableBlock from "../components/TableBlock";

const Pricing = () => {



    return (
        <div>
            {/* <div className="flex flex-col">
                <h1 className="text-3xl font-semibold">Basic</h1>
                <h2>£9 Monthly</h2>
            </div> */}

            <table className="m-auto text-left">
                <tbody>
                    <tr className="pointer-events-none">
                        <th/>
                        <th>
                            <div className="flex flex-col items-center">
                                {/* <h3 className="table-title">Best Seller</h3> */}
                                <h2>Beginner</h2>
                                <h2 className="font-normal">£6 monthly</h2>
                            </div>
                        </th>
                        <th>
                            <div className="flex flex-col items-center">
                                <h2>Advanced</h2>
                                <h2 className="font-normal">£9 monthly</h2>
                            </div>

                        </th>
                        <th>
                            <div className="flex flex-col items-center">
                                <h2>Professional</h2>
                                <h2 className="font-normal">£12 monthly</h2>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td>Custom Domain</td>
                        <TableBlock check={true} />
                        <TableBlock check={true} />
                        <TableBlock check={true} />
                    </tr>
                    <tr>
                        <td>SSL Certificate</td>
                        <TableBlock check={true} />
                        <TableBlock check={true} />
                        <TableBlock check={true} />

                    </tr>
                    <tr>
                        <td>Maintenence</td>
                        <TableBlock check={false} />
                        <TableBlock check={true} />
                        <TableBlock check={true} />
                    </tr>
                    <tr>
                        <td>24/7 Customer Service</td>
                        <TableBlock check={false} />
                        <TableBlock check={false} />
                        <TableBlock check={true} />
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Pricing;