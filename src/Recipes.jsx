import React from 'react'
import './Home.css'
import useFetch from './useFetch'



const Recipes = () => {
    
    const recipes = useFetch("https://dummyjson.com/recipes");
    console.log(recipes);
    

  return (
    
    <>
    
     <div className='recipeDiv'>

        <section className="py-5 recipe-div">
        <h1 className='menu-head'>Recipes</h1>

            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center recipe">
                    {
                        
                        recipes?.map((item) => (

                            // console.log(recipes.name);
                            
                             <div className="col mb-5">

                        <div className="card h-100 recipe-card" key={item?.id} >
                            <img className="card-img-top zoom-img" src={item?.image}alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder">{item?.name}</h5>
                                    <h5 className="fw-bolder">{item?.cuisine}</h5>
                                    $40.00 - $80.00
                                </div>
                            </div>
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" href="#">View options</button></div>
                            </div>
                        </div>
                    </div>
                        ))
                    }
                    
                   
                </div>
            </div>
        </section>


</div>

</>
   
  )
}

export default Recipes



