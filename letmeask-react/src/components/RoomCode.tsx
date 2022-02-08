import copyImg from "../assets/images/copy.svg"

import "../styles/room-code.scss"

export const RoomCode = () => {
  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #-Mv0R6FCwcE6JhZZV98p</span>
    </button>
  )
}
