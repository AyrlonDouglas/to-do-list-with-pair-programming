import './style.css'

export default function Chip(props: ChipProps) {
  const { label } = props
  return <div className='container-chip'><p>{label}</p></div>
}

interface ChipProps {
  label: string
}
