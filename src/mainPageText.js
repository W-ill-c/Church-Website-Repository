import React from "react";

function MainText (){
    function backToTop(){

    }

    return(
        <div className="homeText">
            <p>
                <h2 onClick="backToTop">Welcome to the St. Andrew's Church, Caversham Website</h2>
            </p>
            <div className="subText">
                <p>This is the Church of England parish church for Caversham Heights and the parish is a part of the deanery of Reading in the diocese of Oxford. We are also part of Churches Together in Caversham.</p>
                <br/>
                <h5>Our vision is to be:</h5>
                <p>
                    <ul>
                        <li>
                        a Christian people growing in a faith that is honest and life-changing.
                        </li>
                        <li>
                            a centre for community at the heart of Caversham Heights.
                        </li>
                        <li>
                            a blessing and support to our neighbours locally and in the wider world.
                        </li>
                    </ul>
                </p>
                <p>Many churches do not allow women to have leadership roles, or they teach that homosexuality is wrong, but you would not know that just by visiting them. St Andrew's is a member of Inclusive Church, which campaigns against all forms of discrimination.</p>
                <p>The church is a group of people who are seeking to follow Jesus Christ in their individual and corporate lives. We try to do this through our worship, and by caring for each other and for our neighbours.</p>
                <br/>
                <h5>Services and More</h5>
                <p>Our services have a traditional format, but with a warm and friendly style and our main services are livestreamed on our YouTube channel, if you attend in person it is possible to avoid appearing in the livestream. Please see our Services page for our regular service times and more details.</p>
                <p>St. Andrew's was built in 1910. If you want to discover more about the church's history, click here.
                </p>
                <p>Various activities are based here at the church and the church hall is available for hire. </p>
                <p>To find us on the map, click <a href="https://www.google.co.uk/maps/place/St.+Andrew's+Church/@51.4762908,-0.9870993,17z/data=!4m13!1m7!3m6!1s0x48769afb0157c10d:0x9b4cffa1d4326ced!2sAlbert+Rd,+Caversham,+Reading+RG4+7PL!3b1!8m2!3d51.4764868!4d-0.9847497!3m4!1s0x48769afb08330ead:0x19093d1180a01e38!8m2!3d51.475713!4d-0.9845783?hl=en-GB&authuser=0">here</a>.</p>
                <br/>
                <p>Whatever the reason for your visit to our website, you will be able to find something here of the activities, purpose, and history of the Anglican Church in this parish.</p>
                <p>Enjoy exploring. We welcome you to St. Andrew’s.</p>
            </div>
        </div>
    )
}

export default MainText