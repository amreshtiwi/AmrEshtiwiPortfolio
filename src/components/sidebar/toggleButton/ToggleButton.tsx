
interface ToggleButtonProps {
    setOpen:Function,
}

export const ToggleButton = ({setOpen}: ToggleButtonProps) => {
  return (
    <button onClick={() => {
        setOpen((prev: Boolean) => !prev)
    }}>
        Button
    </button>
  )
}
