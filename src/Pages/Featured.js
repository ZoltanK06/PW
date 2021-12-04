import React, {Suspense} from 'react'
import {FeaturedContainer, FeaturedWrap, FeaturedSlideShow, FeaturedSlider, ClientImg, ClientInfo, ClientName, Review, Previous, Next} from '../Styles/Featured.style'
import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {getMessages} from '../actions/messages'


function Featured() {
    
    const dispatch = useDispatch();
    const [currentClient, setCurrentClient] = useState(0);
    const messages = useSelector((state) => state.messages);
    let featured = (messages.filter(e => e.state === 'accepted'))

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch])

    const nextSlide = () => {
        if(currentClient == (featured.length - 1)){
            setCurrentClient(0);
        }else{
            setCurrentClient(currentClient + 1);
        }
    }

    const prevSlide = () => {
        if(currentClient == 0){
            setCurrentClient(featured.length - 1);
        }else{
            setCurrentClient(currentClient - 1);
        }
    }

    return (
        <FeaturedContainer>
                <FeaturedSlideShow>
                   
                <FeaturedWrap>
                    <Previous onClick={prevSlide} />
                         <ClientImg src={featured[currentClient]?.selectedFile} />
                         <ClientInfo>
                             <ClientName>{featured[currentClient]?.name}</ClientName>
                             <Review>{featured[currentClient]?.message}</Review>
                         </ClientInfo>
                     <Next onClick={nextSlide} />
                </FeaturedWrap>
                    
                </FeaturedSlideShow>
        </FeaturedContainer>
    )
}

export default Featured
