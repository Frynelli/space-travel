



const Images = (props)=>{
   
   
    return(
        
        
          <div key={props.id}>
            <img  
            key={props.id} 
            className="dest-img-lg tech-img-lg crew-img-lg visible-lg"
            src={props.img.lg} 
            alt="Planet Images and Crew Images"
            />
            <img
            key={props.id}
              src={props.img.sm}
              className="dest-img-sm tech-img-sm crew-img-sm visible-sm"
              alt="small"
            />

        </div>
       
       
    )
}

export default Images;