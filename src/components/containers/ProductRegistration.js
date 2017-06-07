import React from 'react';
import superagent from 'superagent';


class ProductRegistration extends React.Component{
  constructor(){
    super();
    console.log("ProductRegistration:constructor()");
    this.state = {
      product:{
        title:'',
        category: '',
        description: '',
        image: '',
        name: '',
        phone_number: '',
        city: ''
      },
      products:[
      ]
    }

  }

//life cycle method
componentDidMount(){
  console.log("ProductRegistration:componentDidMount()");
  superagent
  .get('/api/product')
  .query(null)
  .set('Accept', 'application/json')
  .end((err, response)=>{
    if(err){
      alert('Error while getting Product from DB ERROR : '+err);
      return;
    }
    console.log(JSON.stringify(response.body));
    this.setState({
      products:response.body.results
    })
  });
}

submitProduct(event){
  console.log("ProductRegistration:submitProduct updatedProduct = "+JSON.stringify(this.state.product));
  let updatedProducts = Object.assign([], this.state.products);
   updatedProducts.push(this.state.product);
   superagent
   .post('/api/product')
   .set('Accept', 'application/json')
   .send(this.state.product)
   .end((err, response)=>{
     if(err){
       alert('Error while saving product suresh ..into DB, ERROR : '+err);
       return;
     }
     let emptyPr = {};
     console.log(JSON.stringify(response.body));
     this.setState({
       products: updatedProducts,
       product: emptyPr
     })
   });
}
getProductById(inputId){
  let productList = Object.assign([], this.state.products);
  let productById = this.state.products.map((product)=>{
    if(product._id == inputId){
      return product;
    }
  });
  return productById;
}

  render(){
    return(
      <div className="container">
        <ul>
        <li>suresh</li>
        <li>maram</li>
        <li>ok</li>
        </ul>
            </div>
    );
  }
}
export default ProductRegistration;
