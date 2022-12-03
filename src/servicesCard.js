import Card from 'react-bootstrap/Card';
import React from "react";
import servicesCardInfo from './servicesCardInfo'

export default function ServicesCard (){
    
    return(
        <div className="serviceMainBody">
            <div className='allCards'>
                {servicesCardInfo.map((slide, index) => {
                    const length = slide.length
                    return(
                        <Card.Body className="serviceCards">
                            <Card.Title className="cardTitle">
                                <h3> {slide.title} </h3>
                            </Card.Title>
                            <Card.Text className="cardText">
                                {index===0 && (
                                    <div>
                                        <ul>
                                            <li>{slide.num1}
                                            </li>
                                            <li>{slide.num2}
                                            </li>
                                            <li>{slide.num3}
                                            </li>
                                            <li>{slide.num4}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {index===1 && (
                                    <div>
                                        <ul>
                                            <li>{slide.num1}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                                {index===2 && (
                                    <div>
                                        <ul>
                                            <li>{slide.num1}
                                            </li>
                                            <li>{slide.num2}
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </Card.Text>
                        </Card.Body>
                    )}
                )}
            </div>

            <div className='otherServices'>
                <div className="othersTitle">
                    <h3>Baptisms, Weddings and Funerals</h3>
                </div>
                <ul>
                    <li>There is helpful guidance about baptism/christening here, about church weddings here, and useful information about arranging a funeral here.</li>
                    <li>If you are thinking of getting baptised, or having your child baptised (or "christened"), or you are thinking about getting married in church, then please contact the vicar, who will be very pleased to discuss this with you.</li>
                    <li>If you need to arrange a funeral, it is usual to contact a funeral director first, but if you prefer to talk to the vicar first you are very welcome to get in touch.</li>
                </ul>
            </div>

        </div>
    )
}