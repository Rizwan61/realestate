import React from 'react'
import equinix from '../../assets/images/equinix.png';
import tower from '../../assets/images/tower.png'
import realty from '../../assets/images/realty.png';
import prologis from '../../assets/images/prologis.png'
import '../Logo/Logo.css';
function Logo() {
    const logo = [
        {
            id: 1,
            logo: <img src={equinix} alt="" />,
        },
        {
            id: 2,
            logo: <img src={realty} alt="" />,
        },
        {
            id: 3,
            logo: <img src={tower} alt="" />,
        },
        {
            id: 4,
            logo: <img src={prologis} alt="" />,
        },
    ]
    return (
        <>
            <div class="flex w-11/12	 mx-auto gap-4">
                {
                    logo.map((item) => {
                        return (<div key={item.id}>
                           
                               <div className='logo'>
                               {item.logo}
                               </div>
                            </div>


                    
                        )
                    })
                }
            </div>
        </>
    )
}

export default Logo