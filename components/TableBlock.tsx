import { BsCheckCircleFill } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"

type TProps = {
    check?: boolean
}

const TableBlock = ({ check }: TProps) => {
    return (
        <td>
            {check ?
                <div className="pl-[45%]">
                    <AiOutlineCheck className="text-slate-900 text-2xl" />
                </div> : null}
        </td>
    );
}

export default TableBlock;