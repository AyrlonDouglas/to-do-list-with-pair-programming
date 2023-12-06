import './style.css'

export default function ListTile(prop: ListTileProps) {
  const { label, checked } = prop

  return (
    <div className="container-listTile">
      <div className={`icon-check ${checked ? 'checked' :  ''}`}>
        {checked && <span className="material-symbols-outlined">check</span>}
      </div>
      <p className={checked ? 'checked-label' :  ''}>{label}</p>
    </div>
  )
}

interface ListTileProps {
  label: string
  checked: boolean
}
