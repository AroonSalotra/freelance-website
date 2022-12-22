import { BsCheckCircleFill } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"

type TProps = {
    check?: boolean
}

const TableBlock = ({ check }: TProps) => {
    return (
        <td>
            <div className="pl-[45%]">
                {check ? <AiOutlineCheck className="text-slate-900 text-2xl" /> : null}
            </div>
        </td>
    );
}

export default TableBlock;