import { BsCheckCircleFill } from "react-icons/bs"

type TProps = {
    check?: boolean
}

const TableBlock = ({ check }: TProps) => {
    return (
        <td>
            <div className="pl-[30%]">
                {check ? <BsCheckCircleFill className="text-slate-700 text-2xl" /> : null}
            </div>
        </td>
    );
}

export default TableBlock;