import './HeaderStyle.css'

export function Header({ setCurrentPage }){
    return (
        <>  
            <div className ="header">
                <div className="title_container">
                    <a className='text-white' href='#' onClick={() => {setCurrentPage('Home')}}>
                    <h1>Wiki Games</h1>
                    </a>
                </div>

                <div className="authors -rotate-3 transition-all hover:scale-125 hover:-rotate-1">
                    <p>Albert Borrell-Ribas & Joshua Houghton</p>
                </div>
            </div>
            
        </>
    )
}