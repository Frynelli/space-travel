



const Images = (props)=>{
   
   
    return(
        
        
          <div key={props.id}>
            <img  key={props.id} src={props.img} alt="Planet Images and Crew Images"/>
        </div>
       
       
    )
}

export default Images;