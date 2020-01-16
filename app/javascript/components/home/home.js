import React, {Component} from 'react'
import Jumbotron from "./jumbotron";
import Table from "./table/table";
class Home extends Component {
constructor(){
    super()
   this.state = {
       course_modules: [
           {id: 1, title: '1. setting up new ruby on rails',descreption:'lorem ipsum', active: false},
           {id: 2, title: '2. adding react to rails',descreption:'lorem ipsum', active: false},
           {id: 3, title: '3. building a hello app',descreption:'lorem ipsum', active: false},
           {id: 4, title: '4. adding react router ',descreption:'lorem ipsum', active: false},
       ]
   }
}
    render(){
        return(
            <div>
                <Jumbotron/>
                <Table course_modules = {this.state.course_modules}/>
            </div>
        )
    }

}
export default Home