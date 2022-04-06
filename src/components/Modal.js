import { RuxModal } from '@astrouxds/react'
import { useRef } from 'react'

export const Modal = ({data, setDetail}) => {
    const { isOpen, modalTitle, modalMessage } = data;

  const modal = useRef(null);

  const handleClose = () => {
    setDetail({...data, isOpen: false})
  }

    return (
        <RuxModal
          ref={modal}
          open={isOpen}
          modal-title={modalTitle}
          modal-message={modalMessage}
          confirm-text="OK" deny-text=""
          onRuxmodalclosed={setDetail({...data, isOpen: false})}
          />
    )
}

