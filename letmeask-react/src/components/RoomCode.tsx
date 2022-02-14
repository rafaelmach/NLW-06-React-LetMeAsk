import copyImg from "../assets/images/copy.svg"

import "../styles/room-code.scss"

type RoomCodeProps = {
  code: string;
}

export const RoomCode = (props: RoomCodeProps) => {

  const copyRoomCodeToClipboard = () => {
    navigator.clipboard.writeText(props.code)
  }


  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  )
}
