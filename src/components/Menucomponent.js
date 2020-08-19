import React,{Component} from 'react';
import {Media} from 'reactstrap'
class Menu extends Component{

    constructor(props){
        super(props);
        this.state={
            dishes:[
                {
                    id:0,
                    name:"mahavir prabhu 1",
                    image:"assets/img/bhagwan-mahavir-image.png",
                    description:" kundalpur"
                },
                {
                    id:1,
                    name:"krishna",
                    image:"assets/img/lord krishna.jpg",
                    description:" mathura"
                },
                {
                    id:2,
                    name:"mahaveer bhagwan ",
                    image:"assets/img/mahaveer bhagwan.jpg",
                    description:"sammed sikhar ji"
                },
                {
                    id:3,
                    name:" mahaveer bhagwan 2",
                    image:"assets/img/mahaveer prabhu.jpg",
                    description:"girnar ji"
                },
            ]

        }

    }
    

    render() {

        const Menu= this.state.dishes.map((dish)=>{
            return (
                <div key={dish.id} className="col-12 mt-5">
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name}/>

                        </Media>
                        <Media body className="ml=5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    <Media list>
                        {Menu}
                    </Media>
                </div>
            </div>

        );

    }

}


export default Menu;