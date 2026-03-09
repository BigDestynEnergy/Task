export default function ShowNote({ modal, closeModal }) {

  return(
    <>
      {modal.visible && (
        <div className="modal">
          <div className="noted">

            <h3>Notification Panel</h3>

            <div className="note-content">
              {modal.content}
            </div>

            <button onClick={closeModal}>
              Ok! Got it
            </button>

          </div>
        </div>
      )}
    </>
  )
}