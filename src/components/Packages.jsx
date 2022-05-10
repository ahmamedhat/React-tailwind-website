import React from 'react'
import Card from './Card'
import UserImage from '../assets/images/user.png'
import UsersImage from '../assets/images/users.png'
import PartnershipImage from '../assets/images/partnership.png'

function Packages() {
    return (
        <div className='bg-white w-full px-4 pt-6 py-12'>
            <div className='grid justify-center gap-6 items-center max-w-[1100px] mx-auto py-6 content-center lg:grid-cols-3 md:grid-cols-2' >
                <Card title='Single User' price='149,99' storage='500GB' usersAllowed='1' upTo='2GB' image={UserImage} imageSize={100} />
                <Card title='Partnership' price='199,99' storage='1TB' usersAllowed='3' upTo='10GB' image={PartnershipImage} imageSize={280} />
                <Card title='Group Account' price='299,99' storage='5TB' usersAllowed='10' upTo='20GB' image={UsersImage} imageSize={140} />
            </div>
        </div>
    )
}

export default Packages