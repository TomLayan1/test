type PropType = {
  username?: string
}

const Username = (props: PropType) => {

  return (
    <>
      <h1>Welcome{props.username ? `, ${props.username}` : ''}</h1>
    </>
  )
}

export default Username