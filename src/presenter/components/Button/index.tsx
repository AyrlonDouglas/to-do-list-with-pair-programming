import { ButtomTypeEnum } from '@/shared/enums/ButtomTypeEnum'
import './style.css'

interface ButtomProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  typeButton: ButtomTypeEnum
  label?: string
  iconStart?: string
  iconEnd?: string
}

export default function Button(props: ButtomProps) {
  const { iconEnd, iconStart, label, typeButton, className, ...rest } = props

  const getClassName = () => {
    let classnameToApply = className ?? ''

    switch (typeButton) {
      case ButtomTypeEnum.FAB:
        classnameToApply += ' fab'
        break
      case ButtomTypeEnum.CONTAINED:
        classnameToApply += ' contained'
        break
      case ButtomTypeEnum.OUTLINED:
        classnameToApply += ' outlined'
    }
    return classnameToApply
  }

  return (
    <button className={getClassName()} {...rest}>
      {iconStart && (
        <span className="material-symbols-outlined">{iconStart}</span>
      )}
      {label}
      {iconEnd && <span className="material-symbols-outlined">{iconEnd}</span>}
    </button>
  )
}
