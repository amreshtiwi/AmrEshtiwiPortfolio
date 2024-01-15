
import { motion } from "framer-motion"

interface ToggleButtonProps {
    setOpen: Function,
}

export const ToggleButton = ({ setOpen }: ToggleButtonProps) => {
    return (
        <button onClick={() => {
            setOpen((prev: Boolean) => !prev)
        }}>
            <svg width="24" height="24" viewBox="0 0 24 24">
                <motion.path
                    stroke="#000000"
                    stroke-width="3"
                    stroke-linecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" }
                    }}></motion.path>
                <motion.path
                    stroke="#000000"
                    stroke-width="3"
                    stroke-linecap="round"
                    d="M 2 9.423 L 20 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 }
                    }}></motion.path>
                <motion.path
                    stroke="#000000"
                    stroke-width="3"
                    stroke-linecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" }
                    }}></motion.path>
            </svg>
        </button>
    )
}
