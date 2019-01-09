import React, { Component } from 'react';
import imsg from './bg.jpg';
import './App.css';
import { Tab, Tabs,ListGroup,ListGroupItem,Button,Pager,PagerItem,Modal} from 'react-bootstrap';
import Timer from 'react-compound-timer';
import TimeFormat from "hh-mm-ss";
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar sticky-top navbar-expand-lg navbar-dark cyan darken-3" >
                    <a className="navbar-brand" href="#"><b>TODO APP</b>  <marquee id="p1">List your Everyday task Here</marquee></a>


                </nav>
            </div>
        );
    }
}

class Body extends Component {
    constructor(props,context) {
        super(props,context);
        this.handleSelect = this.handleSelect.bind(this);
        // this.handleTimeChange=this.handleTimeChange.bind(this);
        this.state = {
        tabKey:this.props.day,
        task:'',
        time:'',
        notes:'',
        updateTask:'',
        updateTime:'',
        updateNotes:'',
        monTodo: [],
        tueTodo: [],
        wedTodo: [],
        thurTodo:[],
        friTodo: [],
        satTodo: [],
        sunTodo: [],
        smShow: false,
        updateId:'',
        timerUpdate:"",
         tue:0,
        totalTimeTodo:{
            mon:0,
            tue:0,
            wed:0,
            thur:0,
            fri:0,
            sat:0,
            sun:0,

        }
        

         }
    }
   
  handleSelect(key) {
    this.setState({ tabKey: key });
  }

    handleSubmit = (event)=>{
    event.preventDefault();
    

        if(this.state.tabKey==1){this.addNewTask(this.state.monTodo,this.state.task,this.state.time,this.state.notes)}
        else if(this.state.tabKey==2){this.addNewTask(this.state.tueTodo,this.state.task,this.state.time,this.state.notes)}
        else if(this.state.tabKey==3){this.addNewTask(this.state.wedTodo,this.state.task,this.state.time,this.state.notes)}
        else if(this.state.tabKey==4){this.addNewTask(this.state.thurTodo,this.state.task,this.state.time,this.state.notes)}
        else if(this.state.tabKey==5){this.addNewTask(this.state.friTodo,this.state.task,this.state.time,this.state.notes)}
        else if(this.state.tabKey==6){this.addNewTask(this.state.satTodo,this.state.task,this.state.time,this.state.notes)}
        else if(this.state.tabKey==7){this.addNewTask(this.state.sunTodo,this.state.task,this.state.time,this.state.notes)}



    }

    addNewTask(dayName,name,time,note){
        this.setState({
           dayName: dayName.push({
                    taskName:name,
                    taskNote:note,
                    taskTime:time,
                  })
                })        
        }

    handleInputChange = (event)=>{
    event.preventDefault();
    
    this.setState({
    [event.target.name]:event.target.value,
    })

    }

    onTab(key){
        this.setState({
            tabKey:key,
        
    })
    }

    today(){
        this.setState({
            tabKey:this.props.day,
    })
    }

    incTab(){
        if (this.state.tabKey>=1&&this.state.tabKey<7)   {

        this.setState({
            tabKey:++this.state.tabKey ,
             });  

      }
    }
      decTab(){
       if (this.state.tabKey>1&&this.state.tabKey<=7)   {
        this.setState({
            tabKey:--this.state.tabKey,
             });  
            }
      }

      deleteTask(id,refDay){
        this.setState({
          refDay:delete refDay[[id]],
             });  
            }
            handleUpdateInputChange = (event)=>{
                event.preventDefault();
              
                this.setState({
                [event.target.name]:event.target.value,
                })
            
                }
            

            handleUpdateSubmit = (event)=>{
                event.preventDefault();
                
             

                
                    if(this.state.tabKey==1){this.UpdateTask(this.state.monTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
                    else if(this.state.tabKey==2){this.UpdateTask(this.state.tueTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
                    else if(this.state.tabKey==3){this.UpdateTask(this.state.wedTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
                    else if(this.state.tabKey==4){this.UpdateTask(this.state.thurTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
                    else if(this.state.tabKey==5){this.UpdateTask(this.state.friTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
                    else if(this.state.tabKey==6){this.UpdateTask(this.state.satTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
                    else if(this.state.tabKey==7){this.UpdateTask(this.state.sunTodo,this.state.updateTask,this.state.updateTime,this.state.updateNotes,this.state.updateId)}
            
            
            
                }
            
                UpdateTask(dayName,name,time,note,id){
                 
                   if(name==""){name=dayName[[id]].taskName}
                   if(time==""){time=dayName[[id]].taskTime}
                   if(note==""){note=dayName[[id]].taskNote}
                    this.setState({
                       dayName: Object.assign(dayName[[id]], { 
                                taskName:name,
                                taskNote:note,
                                taskTime:time,
                              })
                            })        
                    }
                
                handleTimeChange=(time,day)=>{
                    console.log(day,time)

                //    console.log(time);
                   this.setState({
                    tue:time,
                   })
                //    this.shouldComponentUpdate=()=>{
                //        return false;
                //    }
                   
                //    console.log(this.state.tue);

                    // this.state.tue=time;
                    // console.log(this.state.tue)
                  
                  
                }
        

    render() {
    let smClose = () => this.setState({ smShow: false });

        
        return (

            <div>

                <div id="body" >
                    <div id="inner">
                        <ul id="additems">
                            <form  onSubmit={this.handleSubmit}>
                            <img src={imsg}></img>

                            <label id="l1">New Time Entry</label>
                                <li className="md-form"><input type="text" name="task" onInput={this.handleInputChange} placeholder="Project/Task" className="form-control" id="inptodo" required  ></input>
                                <li className="md-form"><input type="text" name="notes" onInput={this.handleInputChange} placeholder="Notes (Optional)" className="form-control" id="inptodo2"></input>
                                
                                <input type="text" name="time" onInput={this.handleInputChange} placeholder="Time Format(0:00)" className="md-form form-control" id="inptodo3" pattern="[0-2]{1}[0-9]{1}:[0-5]{1}[0-9]{1}" required></input>
                                </li>
                                <button type="submit" className="btn btn-success btn-rounded"><i className="fa fa-plus " aria-hidden="true"></i>Start Time</button>
                                <input type="date" className="btn btn-info btn-rounded  fa fa-calendar	" id="" placeholder="date"></input>
            

                                <button type="button" onClick={()=>this.decTab()} className="btn btn-primary btn-rounded butn" id="angle1" ><i className="fa fa-chevron-left"  ></i></button>
                                <button type="button" onClick={()=>this.today()}  className="btn btn-primary btn-rounded butn "  >Today</button>
                                <button type="button" onClick={()=>this.incTab()} className="btn btn-primary btn-rounded butn" id="angle2" ><i className="fa fa-chevron-right	" ></i></button>
                        
    
                
                                    </li>
                                </form>

                            
                        </ul>
                            
                    </div>
                    <div>
                        <div className="list-group-flush">
                        </div>
                    </div>
                
                    <Tabs activeKey={this.state.tabKey}   onSelect={this.handleSelect} id="uncontrolled-tab-example"  >

                    <Tab  eventKey={1}   title={"Mon "+"0:00"} >

                        {this.state.monTodo.map((item, i) => {
                           return <ListGroup> 
                            <ListGroupItem bsStyle="info" key={this.state.monTodo.taskNum}>
                                <label className="lbl">{i}-{item.taskName}</label>
                                <br></br>
                                <label className="lbl">{item.taskNote}-</label>
                                <label className="lbl">{item.taskTime}</label>
                            </ListGroupItem>
                        </ListGroup>;
                         }) 
                         }
                         

                    </Tab>

                    <Tab eventKey={2} title={"Tue "+"0:00"} >
                    <div id="divTabs">

                        {this.state.tueTodo.map((item, i) => {

                           return <ListGroup> 
                            <ListGroupItem bsStyle="info" key={this.state.tueTodo.taskNum}>
                                <label className="lbl">Task # {i} - {item.taskName}</label>
                                <br></br>
                                <p className="pt">{item.taskNote} </p>
                            <TodoTimer time={item.taskTime} totaltime={this.handleTimeChange.bind(this,this.totalTimeDays.tue)}/>
                                <button onClick={()=> this.deleteTask(i,this.state.tueTodo)} className="btn btn-danger " id="delbtn"><i className="fa fa-trash-o fa-lg" aria-hidden="true"></i></button>
                                <button  onClick={() => this.setState({ smShow: true,updateId:i })} className="btn btn-success " id="editbtn"><i className="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></button>
                            
                            </ListGroupItem>
                      
                        </ListGroup>;
                         }) 
                         }
                    </div> 
 
                    </Tab>

                    <Tab eventKey={3} title={"Wed "+"0:00"}  >
                        Tab 3 content
                    </Tab>

                    <Tab eventKey={4} title={"Thur "+"0:00"}  >
                        Tab 4 content
                    </Tab>
                    <Tab eventKey={5} title={"Fri "+"0:00"}  >
                        Tab 5 content
                    </Tab>
                    <Tab eventKey={6} title={"Sat "+"0:00"}  >
                        Tab 6 content
                    </Tab>
                    <Tab eventKey={7} title={"Sun "+"0:00"}  >
                   
                    <ListGroup> 
                    {this.state.sunTodo.map((item, i) => {
                           return <ListGroupItem   bsStyle="info" key={this.state.sunTodo.taskNum}>
                                <span  className="spn">Task Name: </span><label className="lbl">{item.taskName}</label>
                                <br></br>
                                <span className="spn">Additional Notes :</span><p>item.taskNote}</p>
                                <br></br>
                            </ListGroupItem>
                         }) 
                         }
                   
                     </ListGroup>;

                    </Tab>
                    <Tab eventKey={8} title={"Total Time: "+"0:00"}  disabled  >
                        
                        </Tab>
            </Tabs> 
                   
                </div>
               
              <EditModal show={this.state.smShow} onHide={smClose} id={this.state.updateId} handleInput={this.handleUpdateInputChange.bind(this)  } handleSubmit={this.handleUpdateSubmit.bind(this)}/>
            </div>
        );
    }
}


class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="page-footer font-small cyan darken-3" id="foot">

                    <div className="container">

                        <div className="row">

                            <div className="col-md-12 py-5">
                                <div className="mb-5 flex-center">

                                    <a className="fb-ic">
                                        <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="tw-ic">
                                        <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="gplus-ic">
                                        <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="li-ic">
                                        <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="ins-ic">
                                        <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                    </a>
                                    <a className="pin-ic">
                                        <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="footer-copyright text-center py-3">© 2018 Copyright:
     <a href="https://mdbootstrap.com/education/bootstrap/"> TODO APP</a>
                    </div>

                </footer>
            </div>
        )
    }
}

class EditModal extends React.Component {
    
    render() {
      return (
        <Modal
          {...this.props}
          bsSize="sm"
          aria-labelledby="contained-modal-title-sm"
        >

          <Modal.Header >       
          <Modal.Title >Edit Time Entry</Modal.Title>

             </Modal.Header>
             <form onSubmit={this.props.handleSubmit}>

          <Modal.Body id="mbody">
           
                 <table id="mtable">   
                   <tr><td><label id="mlabel">Update Project/Task</label></td><td><input onChange={this.props.handleInput} className="md-form form-control" name="updateTask" placeholder="Edit Project/Task" id="inpm"></input></td></tr>
                   <tr><td><label id="mlabel">Update Notes </label></td><td><input onChange={this.props.handleInput} className="md-form form-control" name="updateNotes" placeholder="Notes (Optional)" id="inpm"></input></td></tr>
                   <tr><td><label id="mlabel">Update Time</label></td><td><input onChange={this.props.handleInput} className="md-form form-control"  name="updateTime" placeholder="0:00" id="inpm"></input></td></tr>
                 </table>
                
           
          </Modal.Body>
          
          <Modal.Footer>
                    <Button type="submit" onClick={this.props.onHide}>Update</Button>
                    <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
          
          </form>
        </Modal>
      );
    }
  }

class TodoTimer extends Component{

    total=0;
    assignTime(){
        this.props.totaltime(this.total)
    }
   
    

    render(){
       var time= TimeFormat.toMs(this.props.time, 'hh:mm')
       var hours=0;
var hhh;
        return(
            <Timer
        
            initialTime={time}
            
            lastUnit="h"
            startImmediately={false}
>                   

            {({ start, resume, pause, stop, reset, timerState }) => (
                 <React.Fragment>
                             <div id="timerdiv">(
                             &nbsp;<span id="spantimerh">{hours=<Timer.Hours/> }</span> <label>  hours  </label>
                             &nbsp; <span id="spantimerm"><Timer.Minutes /> </span> <label>minutes </label>
                             &nbsp; <span id="spantimerm"><Timer.Seconds /> </span> <label>seconds </label> 
                             
                            {this.total=(((hours._owner.memoizedState.h*1000) * 60) * 60)+((hours._owner.memoizedState.m*1000) * 60)+(hours._owner.memoizedState.s*1000)}
                            {this.props.totaltime(this.total)}

                      
                            
                                <button className="btn btn-primary "  onClick={start} id="btntimer"><span className="glyphicon glyphicon-play">Start</span></button>
                                <button className="btn btn-danger " onClick={stop}  id="btntimer"><span className="glyphicon glyphicon-stop"></span>Stop</button>

                              </div>
                            <div>
                                
                            </div>
                </React.Fragment>
              )}
            </Timer>
        );
    }

}


class App extends Component {
    render() {
        var cdate=new Date();
        // console.log(cdate.getDay()+1);
       var today=cdate.getDay();
        today==0?today+=7:today=today;
         return (
            <div>
                <Header />

                <Body day={today}  date={cdate.getDate()}/>
                <Footer />
            </div>
        );
    }
}

export default App;
