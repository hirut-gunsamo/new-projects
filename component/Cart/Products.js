import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { ProductConsumer } from './context';
import { View, Text ,Image, Linking} from 'react-native';
export default class Product extends Component{
    render(){
        const {id,title, img, price, inCart} = this.props.product;
        return(
            
           <ProductWrapper className = "col-9 max-auto col-md-6 col-lg-3 my-3">
               <View className = "card">
                <ProductConsumer>
                    {value => (
                 <View
                  className = "img-container  p-5" 
                 onClick = {()=> value.handleDetail(id)
                    
                }>
 
                    <Linking to= "/details">
                        <Image source = {img} alt= "product" className= "card-img-top" />
                     </Linking>
                     <button
                       className="cart-btn"
                       disabled={inCart ? true : false}
                       onClick={()=>{
                           value.AddToCart(id);
                           value.openModal(id);
                       }}
                     >
                        {inCart ? (<p className="text-capitalize mb-0" disabled>
                            {""}
                            in cart
                        </p>):(
                            <i className="fas fa-cart-plus">Buy</i>
                        )}
                     </button>
                </View>
                    )}
               </ProductConsumer>

                        {/* card footer*/}
                        <View className="card-footer d-flex justify-content-between">
                            <Text className="align-self-center mb-0">{title}</Text>
                            <Text className="text-blue font-italic mb-0">
                            <Text className="price">Price: </Text>
                                <Text className="mr-1">ETB  </Text>
                                {price}
                            </Text>
                        </View>
               </View>
           </ProductWrapper >
        );
    }
}

Product.propTypes = {
    product:PropTypes.shape({
      id:PropTypes.number,
      img: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
      inCart: PropTypes.bool
       
    }).isRequired
}

/* const ProductWrapper = styled.View`
.card{
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer {
    background:transparent;
    border-top: transparent;
}
&:hover {
    .card {
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0, 0.2);
    }
    .card-footer {
        background: rgba(247,247,247)
    }
}


.card-img-top{
    height:140px;
    transition: all 1s linear;
}

.img-container {
    position: relative;
   overflow:hidden;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);
}
.price{
    color:green;
}

.cart-btn{
    position:absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
}
.img-container: hover .cart-btn {
    transform: translate(0,0);
}
.cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
}
`;

 */