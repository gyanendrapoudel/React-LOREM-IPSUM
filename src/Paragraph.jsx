

const Paragraph = ({ paragraph }) => {
  return (
    <div className='bg-light text-dark py-3 mt-3 rounded-4'>
      {paragraph.map((p, i) => {
        return (
          <div className=" py-3" key={i}>
            {p}
          </div>
        )
      })}
    </div>
  )
}
export default Paragraph
