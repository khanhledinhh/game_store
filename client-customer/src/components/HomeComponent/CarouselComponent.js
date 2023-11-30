import Carousel from 'react-bootstrap/Carousel';


function IndividualIntervalsExample() {
  return (
    <Carousel id ='img-home'>
      <Carousel.Item interval={1000}>
        <img id ='img-home' className='d-block w-100' height={680}
        src='https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/403869520_1548086595936142_8963544583724315191_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_ohc=MdJ7-Q5H28cAX-q1i9M&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBF5MKPo2Qbrzd9l1vnV2KxlnSzo4eMvaHnRSS2ywn4Sg&oe=656C1872' alt='First slide'/>



      </Carousel.Item>
      <Carousel.Item interval={500}> 
        <img  id ='img-home'className='d-block w-100' height={680} 
        src='https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/404404848_1548086679269467_4878549887140522854_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=iM0aRLCoT6YAX9z2_ME&_nc_ht=scontent.fsgn5-5.fna&oh=00_AfAEJSq4Fbv16i32nBKjb5jc0mXLwih-CduClJb0a_Oe4w&oe=656CB389' alt='Second slide'/>
 
        
      </Carousel.Item>
      <Carousel.Item>
        <img id ='img-home'className='d-block w-100' height={680}
        src='https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/404387607_1548086619269473_8363105735894377256_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_ohc=FCT1v0vala4AX_Sg0EO&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAE-c2cCBed2ZWB7CVenXbSXslITBDG_BQXj80pkPTpvA&oe=656B6A86' alt='First slide'/>

      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;