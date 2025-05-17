import './Styling/Button.css'

function Button({content}) {
  

  return (
    <>
   
    <button className='CTA'>
        {content}
        </button>
     
    </>
  )
}

export default Button