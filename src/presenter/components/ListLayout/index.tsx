import './styles.css'

export default function ListLayout(props: ListLayoutProps) {
  const { header, list, status } = props

  return (
    <div className="container-listLayout">
      <div className="header">{header}</div>
      <div className="status">{status}</div>
      <div className="list">{list}</div>
    </div>
  )
}

interface ListLayoutProps {
  header: JSX.Element
  status: JSX.Element
  list: JSX.Element
}
