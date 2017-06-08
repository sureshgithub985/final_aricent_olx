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
      ],
      blankProduct: {
        titlr:'',
        category: '',
        description: '',
        image: '',
        name: '',
        phone_number: '',
        city: ''
      },
     blankProducts:[]
    }

  }

//life cycle method
componentDidMount(){
    console.log("EmployeeRegistration:componentDidMount()");
    this.getAllProduct();
  }

  getAllEmployee(){
    console.log("ProductRegistration:getAllproduct()");
    superagent
    .get('/api/product')
    .query(null)
    .set('Accept', 'application/json')
    .end((err, response)=>{
      if(err){
        alert('Error while getting product from DB ERROR : '+err);
        return;
      }
      console.log("coming in the react js application...");
      console.log(JSON.stringify(response.body));
      this.setState({
       products:response.body.results
      })
    });
  }

  updatedProduct(event){
    console.log("ProductRegistration:updatedProduct(-) for field: "+event.target.name);
    //create a copy
    let updatedProduct = Object.assign({}, this.state.product);
    //update value
    updatedProduct[event.target.name] = event.target.value;
    //reassign the state
    this.setState({
      product: updatedProduct
    })
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
