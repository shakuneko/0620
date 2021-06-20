import { Button,  Col }from "antd"


export default function ProductItem( { designer }) {
    return (

            <div className=" designer-container ">
                <div className="designer-info">
                    <img
                    className="designer-pic"
                    src={designer.image}
                    alt={designer.alt} />
                    <div className="imformation-box">
                        <div className="designer-intro">
                            <h5 className="designer-name">{designer.name}</h5>
                            <p >{designer.description}</p>
                        </div>
                        <div className="designer-btn">
                            <Button className="learn-more" 
                                icon="Learn More"
                                type="primary"
                                onClick={"/"}>
                            </Button>
                        </div>
                    </div>


                </div>
                
                <Col className="works">
                    <h4 style={{ width:"100%", marginTop:"1rem", textAlign:"left", padding:"5px", color:"#FFC72D"}}>Design Pieces</h4>
                    <div className="designer-work">
                        <div className="designer-work1">
                            <img 
                            className="designer-work-pic"
                            src={designer.work1}
                            alt={designer.alt} />
                        </div>
                        <div className="designer-work1">
                            <img 
                            className="designer-work-pic"
                            src={designer.work2}
                            alt={designer.alt} />
                        </div>
                        <div className="designer-work1">
                            <img 
                            className="designer-work-pic"
                            src={designer.work3}
                            alt={designer.alt} />
                        </div>
                    </div>
                </Col>



            </div>


    );
}