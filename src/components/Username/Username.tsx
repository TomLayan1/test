import type { UsernamePropType } from "./types"

const Username = (props: UsernamePropType) => {

  return (
    <>
      <h1>Welcome{props.username ? `, ${props.username}` : ''}</h1>
    </>
  )
}

export default Username