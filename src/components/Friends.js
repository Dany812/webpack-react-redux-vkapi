import React, { PropTypes, Component } from 'react'
import { ButtonGroup,Button,Panel,Col,Row,Image } from 'react-bootstrap';
 
export default class Friends extends Component {
  
  constructor(...args) {
    super(...args);
    this.state = {
      open: false
    };
  } 

  render() {  
    let template
    let nameBtn
    let friendTitle
    const { friends } = this.props
    if (friends.length > 0) {
      template = friends.map(function(frend, index) {
       friendTitle = <div className='id_friends'><span className='status'>Status: {frend.online}</span> id: {frend.uid} </div>
          return<div key={index}>  
            <Panel header={friendTitle}>
              <Row>
                <Col md={3}>
                  <Image src={frend.photo_100} circle />
                </Col>
                <Col md={9}>
                  <p className='friend_name'>{frend.first_name} {frend.last_name}</p>
                  пол:<span className='inf_clr'> {frend.sex}</span>
                </Col>
              </Row> 
            </Panel>
          </div>
      })
    } 
    if (this.state.open==false){
      nameBtn = 'Показать друзей'
      this.props.friendLoad()
    } else{
      nameBtn = 'Скрыть друзей'
    }
   return <div className=''>
    <ButtonGroup vertical block>
      <div>
        <ButtonGroup vertical block>
          <Button  className='btn_view' onClick={()=>{this.setState({ open: !this.state.open })}}>
            {nameBtn}
          </Button>
        </ButtonGroup> 
        <Panel collapsible expanded={this.state.open}>
          <Row>
          <Panel  >
            <Col md={7}>
             <p className='view'> Показано 5 случайных друзей</p>
            </Col>
            <Col  md={3}>
              <Button className='btn_friend' onClick={this.props.friendLoad}>
                Показать 5 других случайных друзей
              </Button>
            </Col>
          </Panel>
          </Row>
          <Row>
            {template} 
          </Row>
        </Panel>
      </div>
     </ButtonGroup>
    </div>
  }
}

Friends.propTypes = {  
  friendLoad: PropTypes.func.isRequired 
}
